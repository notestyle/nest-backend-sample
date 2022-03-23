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

const products = [
  {
    img: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-13-pro-family-hero?wid=940&hei=1112&fmt=png-alpha&.v=1644969385433",
    title: "IPhone 13",
    description: "Apple phone",
    price: 300,
  },
  {
    img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-silver.png",
    title: "IPhone X",
    description: "Apple phone",
    price: 200,
  },
  {
    img: "https://recosi.net/wp-content/uploads/2017/11/Iphone-6-Silver-1.jpg",
    title: "IPhone 6",
    description: "Apple phone",
    price: 100,
  },
];

// method - [POST, GET, PUT, DELETE, PATCH, PURGE,...]
app.get("/product", function (req, res) {
  res.send(products);
});

app.post("/product", function (req, res) {
  products.push({
    img: "https://recosi.net/wp-content/uploads/2017/11/Iphone-6-Silver-1.jpg",
    title: "IPhone 6",
    description: "Apple phone",
    price: 100,
  });
  res.send("Successfully added");
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;

  const found = users.find((x) => x.email == email && x.password == password);

  if (found) res.send("Success");
  else res.send("Username or password is incorrect");
});

app.listen(3000);
