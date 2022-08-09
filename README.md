# dcomms

Decentralized communications that work with or without the Internet 

# Prerequisites
* A pre-existing [docker swarm](https://docs.docker.com/engine/swarm/) already setup and configured is necessary for orchestration of this software service stack.
* A domain to use for production.
* A directory named `/var/www/dcomms` created on the hosts of all docker nodes for the website document root.
* A subdomain with the A record pointed to the IP address of a node for automatic issuance of a Let's Encrypt SSL certificate.
* A subdomain with the MX record pointed to the A record of a node for DeltaChat mail delivery.
* (Optional) A Tor hidden service [installed](https://community.torproject.org/onion-services/setup/), and listening on port 80 and 8448.

# Introduction

`dcomms` is a bundle of decentralized communication software running as services in the form of a docker swarm stack.

It is used to rapidly deploy and orchestrate decentralized, federated, communications platforms such as [Matrix](https://matrix.org/) and [DeltaChat](https://delta.chat) across multiple hosts.

Let's Encrypt TLS certificates are automatically issued and managed by the Caddy container across all services.

## Service containers

The dcomms stack leverages single node, non-replicated containers of the following services built from the latest images below:

* [CENO client](https://hub.docker.com/r/equalitie/ceno-client) courtesy of censorship.no
* [Synapse Docker](https://hub.docker.com/r/matrixdotorg/synapse/) courtesy of matrix.org
* [Element](https://hub.docker.com/r/vectorim/element-web/) courtesy of vector-im
* [Mau](https://mau.dev/maubot/maubot) courtesy of the maubot dev team
* [Caddy](https://hub.docker.com/_/caddy) courtesy of the Caddy Docker Maintainers
* [docker-mailadm](https://github.com/deltachat/docker-mailadm), includes dovecot and postfix, courtesy of DeltaChat

## Ports

CENO client: 28729/udp \
Caddy (webserver): 443/tcp, 80/tcp, 8448/tcp \
DeltaChat (postfix/dovecot): 587/tcp 143/tcp

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
Use labels to specify which docker nodes services should run on

### Specify a docker worker node to act as a CENO bridge

* Obtain the node ID of a worker.  From the manager node of the swarm type:
```
docker node ls
```
* Add the `node.labels.dwebstackrole` label to that node:
```
docker node update --label-add=dwebstackrole=bridge <nodeid>
```

### Specify a docker worker node to host all other services

* Add the `node.labels.dwebstackdomain` label that matches the subdomain you wish to provision to the node:
```
docker node update --label-add=dwebstackdomain=server1.example.org <nodeid>
```

## Provision

Provision a dcomms server as `server1.example.org`.  From the manager node type:

```
DWEB_DOMAIN=server1.example.org ./dcomm.sh
```

## Redeploy

In the future, to redeploy or restart all dcomms services on `server1.example.org`, from the manager node type:
```
DWEB_DOMAIN=server1.example.org ./dcomm.sh
```

### Generate new configs

**This action is destructive!**
To overwrite generated configs, run the script with the `regen` argument.
The script will prompt you before it overwrites any configuration files.

# Tor

If you would like to make your deployement accesible via a Tor hidden service you need to include the `DWEB_ONION` variable when running dcomm.sh.
```
DWEB_ONION=g674ny5yywiijzbl2gt6hp3sf4wkbnypvzfdasdasdasfnntbxb32yid.onion DWEB_DOMAIN=server1.example.org ./dcomm.sh
```

# Post installation

* Copy a pre-existing website into `/var/www/dcomms/` across all docker nodes or checkout all files from either the [dcomms-web repo (UA)](https://github.com/censorship-no/dcomms-web) or the [chatv3 repo (RU)](https://github.com/censorship-no/chatv3-web) into the same location.
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
