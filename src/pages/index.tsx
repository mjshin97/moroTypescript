import Head from "next/head";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function PasswordUpdate() {
  return (
    <form>
      <input name="password" />
      <button type="submit">비밀번호 변경</button>
    </form>
  );
}

export default PasswordUpdate