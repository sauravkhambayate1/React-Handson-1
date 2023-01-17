import React from "react";
import "./component.css"

const Funccompo = () =>{
    return (
        <div className="flexbox">


        <h2>this is Created using functional<br/>Component</h2>
        <p className="excss">this is done using external css</p>
        <p style={{color: "blue"}}>this is done using inline css</p>
        </div>
    )
}

export default Funccompo;