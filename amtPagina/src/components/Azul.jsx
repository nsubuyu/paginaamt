import React from "react";

function Azul(props) {
  return (
    <div className="">
      <h1>{props.titulo}</h1>
      <img src={props.imagen} alt={props.alter} />
    </div>
  );
}

export default Azul;