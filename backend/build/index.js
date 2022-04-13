"use strict";
const { Client } = require("pg");
const client = new Client({
    host: "localhost",
    port: 5431,
    user: "postgres",
    password: "mukhammed123",
    database: "quran_dungan"
});
client.connect(err => {
    if (err)
        console.log(err.stack);
    else
        console.log("Connected Successfully!!!");
});
console.log("Hello World");
