import React from "react";
import "./css/tag.css";
function Tags(props) {
  return (
    <div className="d-flex tag">
      <div className="bimagen justify-content-center aling-items-center">
        <img src={props.imagen} alt={props.alter} className="w-25" />
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
