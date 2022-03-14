const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());

const users = [
  {
    email: "admin@gmail.com",
    name: "Uguumur",
    password: "123",
  },
  {
    email: "test@gmail.com",
    name: "Bold",
    password: "123",
  },
];

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  const found = users.filter((x) => x.email == email && x.password == password);
  if (found && found.length > 0) {
    res.send("Success");
  } else {
    res.status(401).send("Username or password incorrect!");
  }
});

app.listen(3000);
