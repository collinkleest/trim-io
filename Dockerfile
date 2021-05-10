FROM node:12

COPY . /app

WORKDIR /app

RUN npm install

WORKDIR /app/client

RUN npm install

WORKDIR /app/client

RUN npm run build

WORKDIR /app

CMD ["node", "server.js"]