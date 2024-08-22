import React from "react";

function Imagenp(props) {
  return (
    <div>
        <div>
            <img src={props.imagen} alt={props.alter} />
        <h1>{props.titulo}</h1>
        </div>
        
        <p>{props.body}</p>
        
    </div>
  );
}

export default Imagenp;
