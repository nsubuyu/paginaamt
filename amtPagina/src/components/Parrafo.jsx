import React from "react";
import Azul from "./Azul";

function Parrafo(props) {
  return (
    <div className="">
      <div>
      <Azul titulo="QUIENES SOMOS"/>
      </div>
      <div className="mt-3">
      <p>{props.body}</p> 
      </div>
      
      
    </div>
  );
}

export default Parrafo;
