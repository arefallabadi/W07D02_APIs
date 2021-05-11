//Pulse Check
//Q1 && Q2
const express = require("express");
const app = express();
const port = 3000;


const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 20 },
  { name: "Mark", age: 19 },
];

//Q3
app.use(express.json());
app.get("/users", (req, res) => {
    console.log("1st")
  });
  app.get("/users/:name", (req, res) => {
    const user = req.params.name
    const found = users.find((element) => {
        return element.name === user;
      });
      if (found) {
        res.status(200);
        res.json(found);
      } else {
        res.status(404);
        res.json("User not found");
      }
    });

    //Q4
    app.post("/create/user", (req, res) => {
        const newUser = { name: req.body.name, age: req.body.age };
        users.push(newUser);
    })

    //Q5
    app.get("/", (req, res) => {
        res.status(200);
      });
    

app.listen(port, () => {
  console.log(`the server run on http://localhost:${port}`);
});

