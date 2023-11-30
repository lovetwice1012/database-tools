# database-tools

this tools is used to generate sql for database

## Installation

```bash
npm install database-tools
```

## Example 

```js
const { databaseManager, columnBuilder, CommandBuilder } = require('database-tools');
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

var { sql, params } = new CommandBuilder().createTable("users", columns_createTable).build();

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

var { sql, params } = new CommandBuilder().insert("users", values_insert).build();

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

var { sql, params } = new CommandBuilder().update("users", values_update).where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//delete

var { sql, params } = new CommandBuilder().delete("users").where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select

var { sql, params }= new CommandBuilder().select("users", ['name', 'age', 'address']).where('id = ?', 1).build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select all

var { sql, params } = new CommandBuilder().selectAll("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//select count

var { sql, params } = new CommandBuilder().selectCount("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//drop table

var { sql, params } = new CommandBuilder().dropTable("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//truncate table

var { sql, params } = new CommandBuilder().truncateTable("users").build();

console.log(sql,params);

db.query(sql, params).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});

db.disconnect();

```