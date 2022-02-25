#!/bin/bash
if [[ -z "${DWEB_DOMAIN}" ]]
then
  echo "## Error"
  echo "Please set a DWEB_DOMAIN environment variable before running this script"
  echo "For example: DWEB_DOMAIN=matrix.org ./provision"
  exit 1
fi

# Replace dots with dashes
export DWEB_FRIENDLY_DOMAIN="${DWEB_DOMAIN//./_}"
echo "## Removing existing dwebstack"
docker stack rm dwebstack-${DWEB_FRIENDLY_DOMAIN}
echo "## Sleeping for 10 seconds"
sleep 10
echo "## Provisioning dwebstack"
DWEB_DOMAIN=$DWEB_DOMAIN DWEB_FRIENDLY_DOMAIN=$DWEB_FRIENDLY_DOMAIN docker stack deploy -c docker-compose.yml dwebstack-${DWEB_FRIENDLY_DOMAIN}
