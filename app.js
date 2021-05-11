//Practice 
//Q1
const express = require("express");
const app = express();

const port = 3000;
//Q2
const todos = [
    { todo: "wake up", isCompleted: false },
    { todo: "Eat Breakfast", isCompleted: false },
  ];
app.use(express.json());