#!/bin/bash

echo upload file to remote host...

FILE=./www.tar.gz
exit_code=$1

if [ -f "$FILE" ]; then
    scp www.tar.gz francesco@raspberry 

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

