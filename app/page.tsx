"use client";
import React from 'react';
import Image from "next/image";
import { useState } from "react";
import HighCardLowCard from "./highcard";
import NavigationBar from './navbar';




export default function Home() 
{ 
  return ( 
    <main>
      <HighCardLowCard/>
    </main>
  );
}
