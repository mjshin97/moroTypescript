import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import fs from "fs";

console.log("DB_PASS: ");

function PasswordUpdate() {
    require("./knex");
}

export default PasswordUpdate;

// import Head from "next/head";
// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";
// import knex from "knex";
// import Mysql2 from 'mysql2';
// import fs from "fs";

// console.log("DB_PASS: ");

// function PasswordUpdate() {
//   const dirContents = fs.readdirSync(__dirname);
//   console.log(dirContents);
//   const happy = require("./knex");
// }

// export default PasswordUpdate;

// //try port 3001
