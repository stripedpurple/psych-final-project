#!/bin/bash

type npm >/dev/null 2>&1 || { echo >&2 "Unable to find npm in your path.  Is it installed?  Aborting."; exit 1; }
type node >/dev/null 2>&1 || { echo >&2 "Unable to find node in your path.  Is it installed?  Aborting."; exit 1; }

profiles=$1

if [ -z "$profiles" ]; then
    if [ -z "$NODE_ENV" ]; then
        profiles="default"
    else
        profiles=$NODE_ENV;
    fi
fi

env=$(echo $profiles | awk -F, '{print $1}' | xargs)
profiles=$(echo $profiles | awk -F, '{for(i=2;i<=NF;++i)print $i}' | xargs | sed -E 's/\s+/,/g')

if [ "$env" == "prod" ]; then
    env="production"
fi

if [ "$env" == "dev" ]; then
    env="development"
fi

function install() {
    echo "Running npm install"
    npm install
    touch node_modules/.ts
}

if [ ! -f node_modules/.ts ]; then
    install
elif [ package.json -nt node_modules/.ts ]; then
    install
fi

NODE_ENV=$env NODE_PROFILES=$profiles node app
