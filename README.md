# dcomms

Decentralized communications that work with or without the Internet 

## Prerequisites
* A pre-existing docker swarm already setup and configured is necessary for orchestration of this software service stack.
* A domain to use for production.
* A subdomain with the A record pointed to the IP address of a node for automatic issuance of a Let's Encrypt SSL certificate.
* A subdomain with the MX record pointed to the A record of a node for DeltaChat mail delivery.

# Introduction

`dcomms` is a bundle of decentralized communication software running as services in the form of a docker swarm stack. It can be used to rapidly deploy decentralized services on multiple hosts.

## Service containers

The dcomms stack leverages single node, non-replicated, containers of the following services built from the latest images below:

* [CENO client](https://hub.docker.com/r/equalitie/ceno-client) courtesy of censorship.no
* [Synapse Docker](https://hub.docker.com/r/matrixdotorg/synapse/) courtesy of matrix.org
* [Element](https://hub.docker.com/r/vectorim/element-web/) courtesy of vector-im
* [Caddy](https://hub.docker.com/_/caddy) courtesy of the Caddy Docker Maintainers
* [docker-mailadm](https://github.com/deltachat/docker-mailadm), includes dovecot and postfix, courtesy of DeltaChat

## Ports

CENO client: 28729/udp
Caddy (webserver): 443/tcp, 80/tcp, 8448/tcp
docker-mailadm: 587/tcp 143/tcp

* Note: `dcomms` leverages docker host networking and therefore we recommend denying access to all other unnecessary ports at the host level.

# Installation

Point the following A records to the docker worker you wish to use for deployment:
```
matrix.server1.example.org -> IP of worker node
chat.server1.example.org -> IP of worker node
server1.example.org -> IP of worker node
```

Point the following MX record to the A record:
```
server1.example.org -> server1.example.org
```

Clone or download this repository.  Review `./docker-compose.yml` and make any changes that may be required for your production environment.

## Label

Specify a docker worker node to act as a CENO bridge.

* Obtain the node ID of a worker.  From the manager node of the swarm type:
```
docker node ls
```
* Add the `node.labels.dwebstackrole` label to that node:
```
docker node update --label-add=dwebstackrole=bridge <nodeid>
```

Specify a docker worker node to host all other services.


* Add the `node.labels.dwebstackdomain` label that matches the subdomain you wish to provision to the node:
```
docker node update --label-add=dwebstackdomain=server1.example.org <nodeid>
```

## Provision

Provision a dcomms server as `server1.example.org`.  From the manager node type:

```
DWEB_DOMAIN=server1.example.org ./provision.sh
```

* Note: This is an invasive action. Kindly take caution not to provision a node with the same `DWEB_DOMAIN` multiple times to prevent Synapse from overrwiting data.

## Redeploy

Redeploy a dcomms server as `server1.example.org`.  From the manager node type:
```
DWEB_DOMAIN=server1.example.org ./redeploy.sh
```

# Post installation

* Copy a pre-existing website into `/var/www` of the docker host or checkout the files from `./site` from this repository into that location.
* Optionally visit `https://server1.example.org` to view the website.
* Optionally visit `https://chat.server1.example.org` to view the Element service.
* Optionally configure a Matrix client to use `https://matrix.server1.example.org` as the homeserver.

## Tagging images

You may desire to tag the images within `docker-compose.yml` instead of relying upon the latest images for a more consistent deployment experience in production.

# Troubleshooting

## Log review

To review logs, from the manager node of the swarm, type:
```
docker service logs dwebstack-server1_example_org_bridge -ft
docker service logs dwebstack-server1_example_org_caddy -ft
docker service logs dwebstack-server1_example_org_dovecot -ft
docker service logs dwebstack-server1_example_org_element -ft
docker service logs dwebstack-server1_example_org_mailadm -ft
docker service logs dwebstack-server1_example_org_postfix -ft
docker service logs dwebstack-server1_example_org_synapse -ft
```