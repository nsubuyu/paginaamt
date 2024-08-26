import React from "react";
import "./css/tag.css";
function Tags(props) {
  return (
    <div className="d-flex tag">
      <div className="bimagen d-flex align-items-center justify-content-center">
        <figure>
          <img src={props.imagen} alt={props.alter} className="w-75 h-75" />
        </figure>
      </div>

      <div className="vmtexto">
        <div className=" text-white">
          <h3>
            <strong>{props.titulo}</strong>
          </h3>
        </div>

        <div>
          <p>{props.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default Tags;
