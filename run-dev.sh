#!/bin/sh 
docker run -itd --rm -v ${PWD}:/app -v /app/node_modules -p 3002:8080 t1:dev