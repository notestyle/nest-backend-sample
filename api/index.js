const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Өөр серверээс дууддаг болгохын тулд
app.use(cors());
// req -н body -г json болгож авахын тулд энэ кодыг бичсэн
app.use(bodyParser.json());

const users = [
  {
    email: "admin@gmail.com",
    password: "123",
  },
  {
    email: "test@gmail.com",
    password: "123",
  },
];

// method - [POST, GET, PUT, DELETE, PATCH, PURGE,...]
app.get("/", function (req, res) {
  res.send("Hello World");
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  const found = users.find((x) => x.email == email && x.password == password);

  if (found) res.send("Success");
  else res.send("Username or password is incorrect");
});

app.listen(3000);
