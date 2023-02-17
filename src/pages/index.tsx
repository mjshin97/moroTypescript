import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router"; //
// import * as fs from "fs";

const inter = Inter({ subsets: ["latin"] });

function Login() {
  const router = useRouter(); //

  return (
    <form action="">
      <div>
        <label>ID</label>
        <input
          type="text"
          name="id"
          id="id"
          //autocomplete="off" required
        />
      </div>

      <div>
        <label>PW</label>
        <input
          type="password"
          name="pw"
          id="pw"
          //autocomplete="off" required
        />
      </div>

      <div>
        <input
          type="button"
          onClick={() =>
            router.push({
              pathname: "/testpage1/fafa",
              query: {
                name: "Minjun",
                age: "26",
              },
            })
          }
          value="Login"
        />
      </div>
    </form>
  );
}

export default Login;
