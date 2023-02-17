import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
// import fs from "fs";
// import { gogo } from "../api/knex2";
// import knex from "./knex";

console.log("DB_PASS: ");

////////////////////////////////////////////
function PasswordUpdate() {
  // require("../api/knex");
  require("./knex");
  return (
    <div>
      <h1>asdasda</h1>
    </div>
  );
}
////////////////////////////////////////
export default PasswordUpdate;
