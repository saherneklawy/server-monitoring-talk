This directory contains the example webapp and the ELK monitoring stack using docker containers.

To install docker and docker compose follow this guide: https://docs.docker.com/compose/install/

To run the stack, inside the [vms](vms) directory use the following commands:

- `docker-compose build` to build the containers
- `docker-compose up -d` to start/restart the stack
- `docker-compose stop` to stop the stack

Note that the stack configuration can be found at [vms/docker-compose.yml](vms/docker-compose.yml)
