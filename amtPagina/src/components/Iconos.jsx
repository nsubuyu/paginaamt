import React from "react";
import "./css/icons.css"

function Iconos(props) {
  return (
    <div>
      
      <img src={props.imagen} alt={props.alter} className={props.clase}/>
    </div>
  );
}

export default Iconos;