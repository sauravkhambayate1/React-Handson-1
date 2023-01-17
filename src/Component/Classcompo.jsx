import {Component} from "react";
import "./component.css";


class Classcompo extends Component{
    render(){
      return (
        <div className="flexbox">
        <h2>this is Created using Class<br/>Component</h2>
        <p className="excss">this is done using external css</p>
        <p style={{color: "blue"}}>this is done using inline css</p>
    </div>
      )

    }
}

export default Classcompo;