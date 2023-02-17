const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306, //try3000
    user: "minjun",
    password: "alswns123!",
    database: "testdb",
  },
});

// knex
//   .select("ID", "Password", "redate", "update", "lastlongindate")
//   .from("users");

// knex("users").insert({
//   ID: "minjun",
//   Password: "alswns123!",
//   redate: "20230203",
//   update: null,
//   lastlogindate: null,
// });

console.log("tttt");
