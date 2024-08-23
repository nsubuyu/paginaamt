import React from "react";
import "./css/azul.css";

function Azul(props) {
  return (
    <div className="bg-primary botones ">
      <h1>{props.titulo}</h1>
      <img src={props.imagen} alt={props.alter} />
    </div>
  );
}

export default Azul;
