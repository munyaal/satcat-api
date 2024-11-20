FROM node:20.18.0-alpine3.20

WORKDIR /usr/app

COPY package*.json .

RUN npm install

COPY . .