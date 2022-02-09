# ouistack

This is an experimental ouinet "bootstrap nodes and bridges" in a stack that runs on Docker swarm.

## Deploying
To deploy ouistack, from a manager node, type:
```
docker stack deploy -c docker-compose.yml ouistack
```

## Configuring
To configure the stack, we need to delegate certain nodes to run `bridge` or `bootstrap` services, type:
```
docker node ls
ID                            HOSTNAME        STATUS    AVAILABILITY   MANAGER STATUS   ENGINE VERSION
kz06idgn6hjx8d9f4og9p35sb *   redacted        Ready     Active         Leader           20.10.9
zphbbdkjl0zzn96dp8su9w5vr     redacted        Ready     Active                          20.10.10
2e5kks0gigiz94rwgkc6p7uoj     redacted        Ready     Active                          20.10.9
```

- Delegate a bootstrap node:
```
docker node update --label-add=ouistackrole=bootstrap zphbbdkjl0zzn96dp8su9w5vr
```

- Delegate a bridge node:
```
docker node update --label-add=ouistackrole=bridge 2e5kks0gigiz94rwgkc6p7uoj
```