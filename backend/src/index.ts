const { Client } = require("pg");
require('dotenv').config();

const client = new Client({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

client.connect((err: Error) => {
    if (err) console.log(err.stack);
    else console.log("Connected Successfully!!!");
})

console.log("Hello, ", process.env.USER);
console.log("Hello, ", process.env.PASSWORD);