#!/bin/bash
if [[ -z "${DWEB_DOMAIN}" ]]
then
    echo "## Error"
    echo "Please set a DWEB_DOMAIN environment variable before running this script"
    echo "For example: DWEB_DOMAIN=matrix.org ./dcomm.sh"
    exit 1
fi

if [[ ! -z "$1" ]] && [[ "$1" != "regen" ]]
then
    echo "## Error"
    echo "This script only takes the argument 'regen' to overwrite existing configs."
    echo "DWEB_DOMAIN=matrix.org ./dcomm.sh regen"
    exit 1
fi

# Replace dots with dashes
export DWEB_FRIENDLY_DOMAIN="${DWEB_DOMAIN//./_}"

confirm() {
    # call with a prompt string or use a default
    read -r -p "${1:-Are you sure? [y/N]} " response
    case "$response" in
        [yY][eE][sS]|[yY]) 
            return 0 
            ;;
        *)
            return 1
            ;;
    esac
}

matrix_config () {
    echo "## Removing previous tmp synapse-data"
    docker volume rm synapse_data_tmp
    echo "## Generating synapse config"
    docker run -it --rm \
        --mount type=bind,src=$(readlink -f $DCOMMS_DIR/conf/synapse),dst=/data \
        -e SYNAPSE_SERVER_NAME=matrix.$DWEB_DOMAIN \
        -e SYNAPSE_REPORT_STATS=no \
        -e SYNAPSE_DATA_DIR=/data \
    matrixdotorg/synapse:v1.80.0 generate 2>/dev/null
    echo "## Copying config files into docker swarm configs"
    sudo cp -a /var/lib/docker/volumes/synapse_data_tmp/_data/homeserver.yaml ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    sudo cp -a /var/lib/docker/volumes/synapse_data_tmp/_data/matrix.$DWEB_DOMAIN.signing.key ./conf/synapse/$DWEB_DOMAIN.signing.key
    sudo cp -a /var/lib/docker/volumes/synapse_data_tmp/_data/matrix.$DWEB_DOMAIN.log.config ./conf/synapse/$DWEB_DOMAIN.log.config
    cp ./conf/element/config.json ./conf/element/$DWEB_DOMAIN.config.json
    sed -i -z "s/database.*homeserver.db//" ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    sed -i "s/# vim:ft=yaml//" ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml

    printf "enable_registration: true\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "registration_requires_token: true\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "encryption_enabled_by_default_for_room_type: all\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "rc_registration:\n  per_second: 0.1 \n  burst_count: 2\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "presence:\n  enabled: false\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "database:\n  name: psycopg2\n  txn_limit: 10000\n  args:\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "    user: synapse\n    password: null\n    database: synapse\n    host: localhost\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml
    printf "    port: 5432\n    cp_min: 5\n    cp_max: 10\n" >> ./conf/synapse/$DWEB_DOMAIN.homeserver.yaml

    sed -i "s/TEMPLATE/$DWEB_DOMAIN/" ./conf/element/$DWEB_DOMAIN.config.json
}

mastodon_config () {
    echo "## Removing previous tmp mastodon data"
    docker volume rm masto_data_tmp
    echo "## Generating mastodon config"
    sudo cp -a ./conf/mastodon/mastodon.env.production ./conf/mastodon/$DWEB_DOMAIN.env.production
    SECRET_KEY_BASE=`docker run -it --rm \
        --mount type=volume,src=masto_data_tmp,dst=/opt/mastodon \
            -e RUBYOPT=-W0 tootsuite/mastodon:v4.1.2 \
        bundle exec rake secret` >/dev/null

    OTP_SECRET=$(docker run -it --rm \
        --mount type=volume,src=masto_data_tmp,dst=/opt/mastodon \
            -e RUBYOPT=-W0 tootsuite/mastodon:v4.1.2 \
        bundle exec rake secret) >/dev/null

    VAPID_KEYS=$(docker run -it --rm \
        --mount type=volume,src=masto_data_tmp,dst=/opt/mastodon \
            -e RUBYOPT=-W0 tootsuite/mastodon:v4.1.2 \
        bundle exec rake mastodon:webpush:generate_vapid_key)>/dev/null
    VAPID_FRIENDLY_KEYS=${VAPID_KEYS//$'\n'/\\$'\n'}

    #REDIS_PW=$(openssl rand -base64 12)

    sed -i "s/REPLACEME/$DWEB_DOMAIN/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i "s/SECRET_KEY_BASE=/&$SECRET_KEY_BASE/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i "s/OTP_SECRET=/&$OTP_SECRET/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i "s/VAPID_KEYS=/$VAPID_FRIENDLY_KEYS/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i 's/\r$//g' ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i "s/ALTERNATE_DOMAINS=social./&$DWEB_ONION/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    sed -i "s/SMTP_SERVER=/&$DWEB_DOMAIN/" ./conf/mastodon/$DWEB_DOMAIN.env.production
    #sed -i "s/REDIS_PASSWORD=/&$REDIS_PW/" ./conf/mastodon/$DWEB_DOMAIN.env.production
}

mau_config () {
    echo "## Removing previous tmp data"
    docker volume rm mau_tmp
    echo "## Generating mau bot config"
    docker run --rm -v mau_tmp:/data:z dock.mau.dev/maubot/maubot:v0.3.1 1>&2  >/dev/null
    sudo cp -a /var/lib/docker/volumes/mau_tmp/_data/config.yaml ./conf/mau/$DWEB_DOMAIN.config.yaml
    
    MAU_PW=$(tr -dc 'A-Za-z0-9' < /dev/urandom | head -c 18)
    echo "## Mau credentials = admin:$MAU_PW"
    sed -i "s/admins:/&\n  admin: $MAU_PW/" ./conf/mau/$DWEB_DOMAIN.config.yaml
}

if docker stack ps dwebstack-${DWEB_FRIENDLY_DOMAIN} 1>&2  >/dev/null
then
    echo "## A dwebstack for this domain exists. This script is destructive."  
    if ! confirm "Redeploy existing stack? (y/n) "
    then
        echo "Not deleting stack. Halting script." 
        exit 1
    else
        echo "## Removing existing dwebstack"
        docker stack rm dwebstack-${DWEB_FRIENDLY_DOMAIN} 
        docker network rm caddy-${DWEB_FRIENDLY_DOMAIN} 
    fi
fi


echo "## Sleeping for 10 seconds"
sleep 10


echo ""
if [ -f "./conf/synapse/$DWEB_DOMAIN.homeserver.yaml" ]; then
    echo "A Synapse config for $DWEB_DOMAIN already exists."
    if [ "$1" == "regen" ] && confirm "Overwrite existing config? (y/n) "
    then
        matrix_config
    else
        echo "Not overwritting Matrix config"
    fi
else
    matrix_config
fi

echo ""
if [ -f "./conf/mastodon/$DWEB_DOMAIN.env.production" ]; then
    echo "A Mastodon config for $DWEB_DOMAIN already exists."
    if [ "$1" == "regen" ] && confirm "Overwrite existing config? (y/n) "
    then
        mastodon_config
    else
        echo "Not overwritting Mastodon config"
    fi
else
    mastodon_config
fi

echo ""
if [ -f "./conf/mau/$DWEB_DOMAIN.config.yaml" ]; then
    echo "A Mau config for $DWEB_DOMAIN already exists."
    if [ "$1" == "regen" ] && confirm "Overwrite existing config? (y/n) "
    then
        mau_config
    else
        echo "Not overwritting config"
    fi
else
    mau_config
fi

echo ""
if [ -f "./conf/caddy/Caddyfile.$DWEB_DOMAIN.tmpl" ]; then
    echo "A caddyfile for $DWEB_DOMAIN already exists."
    if [ "$1" == "regen" ] && confirm "Overwrite existing config? (y/n)"
    then
        echo "Copy CaddyFile"
        cp ./conf/caddy/Caddyfile.tmpl ./conf/caddy/Caddyfile.$DWEB_DOMAIN.tmpl
    else
        echo "Not overwritting config"
    fi
else
    echo "Copy CaddyFile"
    cp ./conf/caddy/Caddyfile.tmpl ./conf/caddy/Caddyfile.$DWEB_DOMAIN.tmpl
fi

echo "## Provisioning dwebstack"
DWEB_ONION=$DWEB_ONION DWEB_DOMAIN=$DWEB_DOMAIN DWEB_FRIENDLY_DOMAIN=$DWEB_FRIENDLY_DOMAIN docker stack deploy -c docker-compose.yml dwebstack-${DWEB_FRIENDLY_DOMAIN}
