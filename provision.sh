#!/bin/bash
docker run -it --rm \
    --mount type=volume,src=synapse-data,dst=/data \
    -e SYNAPSE_SERVER_NAME=$DWEB_DOMAIN \
    -e SYNAPSE_REPORT_STATS=no \
    matrixdotorg/synapse:latest generate

cp /var/lib/docker/volumes/synapse-data/_data/homeserver.yaml conf/synapse/$DWEB_DOMAIN.homeserver.yaml
cp /var/lib/docker/volumes/synapse-data/_data/$DWEB_DOMAIN.signing.key conf/synapse/$DWEB_DOMAIN.signing.key
cp /var/lib/docker/volumes/synapse-data/_data/$DWEB_DOMAIN.log.config conf/synapse/$DWEB_DOMAIN.log.config
