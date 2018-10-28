#!/bin/bash -e

DOCKER="docker-compose run --rm -w /home/app app"

function usage {
    echo -e "Node Docker CLI - Tool to work with node docker container.\n"
    echo -e "usage: ./container.sh [command]\n"
    echo "Commands:"
    echo "    ssh          SSH into the docker container."
    echo "    npm          Run php cli in the docker container."
    echo "    help         Display usage"
}

if [ $# -gt 0 ]; then
    if [ "$1" == "npm" ]; then
        $DOCKER "$@"
    elif [ "$1" == "help" ] || [ "$1" == "-h" ] || [ "$1" == "--help" ]; then
        usage; exit
    else
        usage; exit
    fi
else
  usage; exit
fi
