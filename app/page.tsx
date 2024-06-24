"use client";

import Header from "@/components/Header";
import { useState, useEffect } from "react";


export default function Home() {
  const [tasks, setTask] = useState("");


  return (
    <>
      <Header />
    </>
  );
}
