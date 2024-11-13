"use client"
import { useEffect, useState } from "react";
import {BACKEND_ENDPOINT} from "@/constants/constant"
export default function Home() {
  const [data, setData] = useState()
  
  const fetchData = async () => {
  try{
    const response = await fetch(`${BACKEND_ENDPOINT}`);
    const datas = await response.json();
    setData(datas)
    console.log(`data:`, datas);
    
  }catch(error){
    throw new Error()
  }finally{
    console.log("failed");
  }
  }

useEffect(()=>{
  fetchData()
},[])

  return (
 <main>{data}</main>
  );
}
