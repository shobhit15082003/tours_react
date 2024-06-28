import { useState } from "react";
import Cards from "./components/Cards";
import dataa from "./data";

export default function App() {
  const [data,setData]=useState(dataa);
  return (
    <div className="w-full h-[100vh]  ">
      <div className="mt-12 flex flex-col  items-center h-full w-full ">
        <h1 className="text-center  border-8 w-[25%] border-blue-700 border-dashed  py-5 text-5xl font-bold rounded-3xl">Plan Your Trip</h1>
        <div className=" w-full h-[100vh]"><Cards data={data} setData={setData} ></Cards></div>
      </div>
    </div>
  )
}