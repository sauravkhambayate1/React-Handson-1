
import './App.css';
import Funccompo from "./Component/Funccompo";
import Classcompo from "./Component/Classcompo";
import React, { useState } from "react"; 
// import {BrowserRouter, Route, Routes } from 'react-router';

function App() {

  const [fshow,setfShowpost]=useState(false)
  const Fbtn=()=>{
    setfShowpost(!fshow)
  }
  const [cshow,setcShowpost]=useState(false)
  const Cbtn=()=>{
    setcShowpost(!cshow)
  }
  return (
    <div className="App">
      <div className='heading'><h1>Styling using Functional and Class component</h1></div>
      
     <div>
     <button id='func-btn' onClick={Fbtn}>To see styling in Functional component</button> 
        <button id='class-btn' onClick={Cbtn}>To see styling in Class component</button>
     </div>

  
      <div>
      <div id="flexdiv">
        {fshow ? <Funccompo/> : ""}
        {cshow ? <Classcompo/> : ""}
      </div>
      </div>
    </div>
  );
}
 
export default App;
