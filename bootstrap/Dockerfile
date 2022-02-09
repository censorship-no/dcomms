FROM ubuntu:latest AS builder
ENV DHT_IP DHT_IP
ENV DHT_PORT DHT_PORT
ENV DHT_DIR DHT_DIR
WORKDIR /
RUN apt-get update && apt-get install --no-install-recommends --yes git build-essential \ 
  libboost-dev libboost-system-dev libboost-tools-dev ca-certificates dos2unix && \
  git clone https://github.com/bittorrent/bootstrap-dht.git && cd bootstrap-dht
WORKDIR /bootstrap-dht
RUN git remote add arvidn https://github.com/arvidn/bootstrap-dht.git && git fetch arvidn && \ 
  git checkout arvidn/fix-build && bjam release
COPY . .

FROM ubuntu:focal
WORKDIR /tmp
COPY --from=0 /bootstrap-dht/dht-bootstrap .
CMD ./dht-bootstrap 0.0.0.0 --dir ${DHT_DIR:-.} --x-pollinate ${DHT_IP:-67.215.246.10} ${DHT_PORT:-6881}
