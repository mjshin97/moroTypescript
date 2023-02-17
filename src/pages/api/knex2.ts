import { Knex, knex } from "knex";

// interface User {
//   id: number;
//   age: number;
//   name: string;
//   active: boolean;
//   departmentId: number;
// }

const config: Knex.Config = {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306, //try3000
    user: "minjun",
    password: "alswns123!",
    database: "testdb",
  },
};

const knexInstance = knex(config);
console.log("knexInstance", knexInstance);

export async function gogo() {
  try {
    // knex.select("ID", "Password", "redate", "update", "lastlongindate").from("users");
    // const users = await knex<any>("users").select("ID", "Password");
    // console.log(users);
    console.log("dd");
  } catch (err) {
    console.error(err);
    // error handling
  }
}
