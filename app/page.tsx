"use client";
//import React from 'react';
import Image from "next/image";
import { useState } from "react";
import HighCardLowCard from "./highcard";



export default function Home() {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10) + 1;
  }
  const [randomNumber, setRandomNumber] = useState(getRandomNumber());

  console.log("Hello World")
  console.log({randomNumber})

  return (
    <main className="min-h-screen items-center justify-between">
      <HighCardLowCard/>
      
    </main>
  );
}
