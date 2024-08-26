import React from "react";
import "./css/azul.css";

function Azul(props) {
  return (
    <div data-aos="fade-up" className="d-flex caucar mt-5">
      <div className="botones btnd text-white">
        <h1>
          <a className="text-white" href={props.link} target="_blank">
            {props.titulo}
          </a>
        </h1>
        <img src={props.imagen} alt={props.alter} />
      </div>
      <div className="botones btnd  text-white">
        <h1>
          <a className="text-white" href={props.link}>
            {props.titulo2}
          </a>
        </h1>
        <img src={props.imagen2} alt={props.alter2} />
      </div>
    </div>
  );
}

export default Azul;
