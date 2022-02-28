const express = require("express");

const app = express();
const port = 3000;

/**
 * GET - Ямар нэгэн жагсаалт харуулах буцаахад
 * POST - Login, Шинээр дата хадгалахад ашиглана
 * PUT - Update, Засвар хийхэд ашиглана
 * DELETE - Устгахад
 */

let students = [];

// http://localhost:3000/student [GET]
app.get("/student", (req, res) => {
  // 1. query parameter
  // req.query.
  res.send(students);
});

// http://localhost:3000/student [POST]
app.post("/student", (req, res) => {
  students.push({ name: "Test" });
  res.send("Added");
});

// http://localhost:3000/student [PUT]
app.put("/student", (req, res) => {
  const found = students.find((x) => x.name == "Test");
  found.name = "Test 2";
  res.send("Updated");
});

// http://localhost:3000/student [DELETE]
app.delete("/student", (req, res) => {
  students = [];
  res.send("Deleted");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
