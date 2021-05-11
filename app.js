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

//Q3
app.get("/todos", (req, res) => {
    res.json(todos);
  });

  //Q4
  app.post("/create/todo", (req, res) => {
    res.status(201);
    const newT = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    todos.push(newT);
    res.json(newT);
  });

  //Q5
  app.put("/update/todo/:name", (req, res) => {
    let index;
    const newT = { todo: req.body.todo, isCompleted: req.body.isCompleted };
    const found = todos.find((elm, i) => {
      index = i;
      return elm.todo === req.params.name;
    });
  
    if (found) {
      res.status(200);
      todos[index] = newT;
      res.json(newT);
    } else {
      res.status(404);
      res.json("Not Found");
    }
  });
  


  app.listen(port, () => {
    console.log(`run on http://localhost:${port}`);
  });
