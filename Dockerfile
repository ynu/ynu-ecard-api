# Set the base image to nginx
FROM node

# File Author / Maintainer
MAINTAINER Liudonghua <liudonghua123@gmail.com>

# update the repository sources list
RUN apt-get update

# install vim for quick modify
RUN apt-get install -y vim

# http://www.clock.co.uk/blog/a-guide-on-how-to-cache-npm-install-with-docker
ADD package.json /app/package.json
ADD package-lock.json /app/package-lock.json
ADD yarn.lock /app/yarn.lock

WORKDIR /app

RUN npm install

# copy static resources to the specified location
COPY . /app

# build and start server in production
CMD npm run prod
