#!/bin/sh
if grep -Fqe "Already up-to-date." << EOF
`cd /root/bpkb/jar && git pull`
EOF
then
    echo "No update"
else
    echo "Newest exist, recompose!"
    cd /root/bpkb/jar/dev/application-host
    docker-compose down
    docker-compose up -d --build
fi

# cat <(crontab -l) <(echo "* * * * * /root/test.sh") | crontab -