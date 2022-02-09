# ouistack/bootstrap

## Instructions

- Replace `keith` with your organization name in the steps below

- Build the docker container:
```
build -t keith/ouistack-bootstrap:v0.0.1 .
```
- Push the docker container to dockerhub or to a registry accessible by the swarm:
```
docker push keith/ouistack-bootstrap:v0.0.1
```