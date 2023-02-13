import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router"; //

const inter = Inter({ subsets: ["latin"] });
const [id, setId] = useState("");
const [pw, setPw] = useState("");

function Login() {
  const router = useRouter(); //

  const onChangefun = (event) => {
    setId(event.target.value);
    console.log(event.target.value);
  }

  return (
    <form action="">
      <div>
        <label>ID</label>
        <input
          type="text"
          name="id"
          id="id"
          //autocomplete="off" required
          onChange={(event) => {
            
          }}
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
  );
}

export default Login;
