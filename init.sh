#!/bin/bash

if [ ${NODE_ENV} = "production" ]; then
    pm2-runtime /home/app/index.js;
else
    pm2-dev /home/app/index.js;
fi
