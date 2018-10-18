# Node.js REST API Edrans Coding Challenge

This repo consists of a REST API written in Node.js aiming to keep a record of majors, subjects, and students at a university.

A subject can belong to one or more majors; a student signs up for one major and then signs up for one or more subjects in that major. Upon completion of each subject, its state and its associated term grade are updated.

## Starting App

This API has two entry points (start-up scripts)–one with an empty DB and another with a pre-populated one. In either case, don't forget to first run ```npm install```.

**Running With a plain (empty) DB**

```
npm start
```

**Running with a DB prepopulated with a few sample rows on each table/model**

```
node server-seeded-db.js
```

Both types of executions will start the application and create an sqlite database in your app dir.

The API is now ready to be consumed at [http://localhost:3000](http://localhost:3000).

## How to consume this API

Please refer to [_this Postman collection_](https://www.getpostman.com/collections/baef70e47d7fff72bda2) in order to understand how to invoke the endpoints this API exposes.

## Author

* **Andrés Bekerman**