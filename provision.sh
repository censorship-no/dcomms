#!/bin/bash
if [[ -z "${DWEB_DOMAIN}" ]]
then
  echo "## Error"
  echo "Please set a DWEB_DOMAIN environment variable before running this script"
  echo "For example: DWEB_DOMAIN=matrix.org ./provision"
  exit 1
fi

echo "## Removing existing dwebstack"
docker stack rm dwebstack
echo "## Sleeping for 10 seconds"
sleep 10
echo "## Removing synapse-data"
echo "## Generating synapse config"
docker run -it --rm \
    --mount type=volume,src=synapse_data,dst=/data \
    -e SYNAPSE_SERVER_NAME=$DWEB_DOMAIN \
    -e SYNAPSE_REPORT_STATS=no \
    matrixdotorg/synapse:latest generate
echo "## Copying config files into docker swarm configs"
cp /var/lib/docker/volumes/synapse-data/_data/homeserver.yaml conf/synapse/$DWEB_DOMAIN.homeserver.yaml
cp /var/lib/docker/volumes/synapse-data/_data/$DWEB_DOMAIN.signing.key conf/synapse/$DWEB_DOMAIN.signing.key
cp /var/lib/docker/volumes/synapse-data/_data/$DWEB_DOMAIN.log.config conf/synapse/$DWEB_DOMAIN.log.config
echo "## Provisioning dwebstack"
DWEB_DOMAIN=$DWEB_DOMAIN docker stack deploy -c docker-compose.yml dwebstack