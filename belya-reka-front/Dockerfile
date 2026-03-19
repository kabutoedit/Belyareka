FROM node:18-alpine

WORKDIR /app

RUN apk add --no-cache git

COPY package.json package-lock.json* ./

RUN npm install

COPY . .

RUN npm run build
