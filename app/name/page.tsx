"use client"

import { useState, FormEvent } from "react";
export default function Page() {
  const [inputVal, setInputVal] = useState("");


  const handleSubmit = (event: FormEvent){

  
  }
  return (
    
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //    name
    //   </main>
    <div>
        <div>
            <h1>Enter Your Name</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <input type = "text" placeholder="Type your name... " value = {inputVal} onChange={(e) => setInputVal(e.target.value)}/>
          <button type= "submit">Predict Data</button>
        </form>
    </div>
   
  );
}
