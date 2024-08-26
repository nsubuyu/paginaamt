import React from "react";
import "./css/imagenp.css";

function Imagenp(props) {
  return (
    <div className="asesorias" id={props.ident}>
      <div className="d-flex " >
        <div className="">
          <img src={props.imagen} alt={props.alter} />
        </div>

        <div>
          <h1>
            <strong>{props.titulo}</strong>
          </h1>
        </div>
      </div>

      <div className="cuerpo">
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Imagenp;
