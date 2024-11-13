"use client"
import { useEffect, useState } from "react";
import {BACKEND_ENDPOINT} from "@/constants/constant"
export default function Home() {
  const [data, setData] = useState()
  
  const fetchData=async()=>{
    const response = await fetch(`${BACKEND_ENDPOINT}`);
    const data = await response.json();
    console.log(data);

  }
useEffect(()=>{
  fetchData()
},[])
  return (
 <main>Food delivery JACK'S Server</main>
  );
}
