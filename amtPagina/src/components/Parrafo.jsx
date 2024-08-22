import React from "react";

function Parrafo(props) {
  return (
    <div>
      <h1>{props.titulo}</h1>
      
      <p>{props.body}</p>
    </div>
  );
}

export default Parrafo;
