import React from "react";

function Titulo(props) {
  return (
    <div>
      <h1>{props.texto}</h1>
      <h1>{props.negritas}</h1>
      
    </div>
  );
}

export default Titulo;