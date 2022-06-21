const express = require("express");
const app = express();

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html"); //ruta absoluta del elemento
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/views/about.html"); //ruta absoluta del elemento
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/views/work.html"); //ruta absoluta del elemento
});