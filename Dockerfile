FROM node:16-alpine
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
COPY .env.default /app/.env

RUN yarn install
COPY . /app
CMD yarn serve 8080
EXPOSE 8080
