const express = require("express");
const mysql = require("mysql2");
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World");
  )}
