FROM node:18-alpine

COPY ./mockServer/package*.json ./
COPY ./mockServer/tsconfig*.json ./
COPY schema*.graphql ./
COPY ./mockServer ./mockServer

RUN yarn install

EXPOSE 3000

CMD yarn mockserver