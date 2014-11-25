FROM ubuntu:latest

RUN apt-get update
RUN apt-get install -y nodejs npm git git-core

ADD package.json /install/package.json

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh