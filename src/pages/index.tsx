import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router"; //

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
              pathname: "/testpage1",
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

    /*
        <button id="btn" type="submit">
          LOGIN
        </button>
    */

    /*
        <input
          type="button"
          onClick={() => router.replace("/", "http://localhost:3000/testpage1")}
          value="Push"
        />      
    */

    /*
    <fieldset>
      <legend>로그인</legend>
      <form>
        <div>
          <a>ID</a>
          <input name="id" />
        </div>
        <div>
          <a>PW</a>
          <input name="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </fieldset>
    */
  );
}

export default Login;
