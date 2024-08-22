import React from "react";
import "./css/tag.css"
function Tags(props) {
  return (
    <div className=".bg-white">
      <div>
      <img src={props.imagen} alt={props.alter} />
      </div>
      <div ><p>{props.titulo}</p></div>
      <div><p>{props.texto}</p></div>
      
      
    </div>
  );  
}

export default Tags;