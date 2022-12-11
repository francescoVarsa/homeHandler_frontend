#!/bin/bash

echo upload file to remote host...

FILE=./www.tar.gz
exit_code=$1

if [ -f "$FILE" ]; then
    scp www.tar.gz francesco@192.168.178.148:~/projects/homeHandler_backend/docker/prod

    if [ $? -eq 0 ]; then
    echo upload successfully
    else
    echo the upload is failed 

    exit $exit_code
    fi

else 
    echo The file www.tar.gz does not exits under this path $FILE

    exit $exit_code
fi

