FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
CMD [ "npm", "run", "start:prod" ]
CMD [ "npm", "run", "build" ]
