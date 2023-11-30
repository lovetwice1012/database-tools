# easy-sql-builder

this tools is used to generate sql for database

## Installation

```bash
npm install easy-sql-builder
```

## Example 

```js
const { databaseManager, columnBuilder, commandBuilder } = require('easy-sql-builder');
const db = new databaseManager();

const host = 'localhost';
const user = 'root';
const password = 'root';
const databaseName = 'test';

db.setDatabaseConnectionConfig(host, user, password, databaseName);
db.connect();

//create table
const columns_createTable = [
    new columnBuilder().setColumnName('id').integer().notNull().autoIncrement().build(),
    new columnBuilder().setColumnName('name').varchar(255).notNull().build(),
    new columnBuilder().setColumnName('age').integer().notNull().build(),
    new columnBuilder().setColumnName('address').text().notNull().build(),
];

var { sql, params } = new commandBuilder().createTable("users", columns_createTable).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//insert
const values_insert = {
    name: 'John',
    age: 20,
    address: 'USA',
};

var { sql, params } = new commandBuilder().insert("users", values_insert).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//update

const values_update = {
    name: 'John',
    age: 20,
    address: 'USA',
};

var { sql, params } = new commandBuilder().update("users", values_update).where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//delete

var { sql, params } = new commandBuilder().delete("users").where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select

var { sql, params }= new commandBuilder().select("users", ['name', 'age', 'address']).where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select all

var { sql, params } = new commandBuilder().selectAll("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select count

var { sql, params } = new commandBuilder().selectCount("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//drop table

var { sql, params } = new commandBuilder().dropTable("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//truncate table

var { sql, params } = new commandBuilder().truncateTable("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

db.disconnect();

```