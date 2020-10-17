# trim-io

A simple URL shortener built with Mongo, Express and Node.

#

[![Website shields.io](https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Ftrimio.herokuapp.com)](https://trimio.herokuapp.com)
[![Website shields.io](https://img.shields.io/github/v/release/collinkleest/trim-io?style=flat)](https://github.com/collinkleest/trim-io/releases)
[![Website shields.io](https://img.shields.io/github/license/collinkleest/trim-io)](https://github.com/collinkleest/trim-io/blob/master/LICENSE)

#

View a live demo here: [https://trimio.herokuapp.com](https://trimio.herokuapp.com)

#

## Development

Must have a version of node and npm to run app.

First clone and change into trim-io directory.

```bash
git clone https://github.com/collinkleest/trim-io.git
cd trim-io/
```

Now install all node dependencies.

```bash
npm install
```

Now run the application with NPM run.

```bash
npm run start:dev
```

#

## Environment Variables

The following environment variables need to be set to run the application properly.

```
PORT= // port to run the app on i.e 5000, 443, 80
MONGO_USR= // username for mongodb
MONGO_PASS= // password for mongodb
MONGO_DB= // target mongo database
MONGO_URL= // url to the mongo database, either cloud hosted or locally hosted
```
