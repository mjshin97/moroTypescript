const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  ID: "minjun",
  password: "minjun",
  update: "alswns123!",
  lastlongindate: "crudtest",
});

app.post("/create", (req, res) => {
  const name = req.body.frontname;
  const age = req.body.frontage;
  const country = req.body.frontcountry;
  const position = req.body.frontposition;
  const wage = req.body.frontwage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES (?,?,?,?,?)",
    [name, age, country, position, wage],
    //콜백함수
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("your server is running on 3001~! yeah");
});
