FROM node:12

COPY . /app

WORKDIR /app


RUN npm install

WORKDIR /app/client

RUN npm install

WORKDIR /app/client

RUN npm run build

WORKDIR /app

EXPOSE 443

CMD ["node", "server.js"]