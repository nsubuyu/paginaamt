import React from "react";

function Titulo(props) {
  return (
    <div>
      <h1 className="titulo">{props.texto}</h1>
      <h2 className="">
        <strong>{props.negritas}</strong>
      </h2>
    </div>
  );
}

export default Titulo;
