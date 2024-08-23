import React from "react";
import "./css/tag.css"
function Tags(props) {
  return (
    <div className="d-flex">
      <div className="bimagen">
      <img src={props.imagen} alt={props.alter} className="w-25"/>
      </div>
      <div ><p>{props.titulo}</p></div>
      <div><p>{props.texto}</p></div>
      
      
    </div>
  );  
}

export default Tags;