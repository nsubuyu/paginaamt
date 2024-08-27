import React from "react";


function Iconos(props) {
  return (
    <div className="m-3">
      
      <img src={props.imagen} alt={props.alter} className={props.clase}/>
    </div>
  );
}

export default Iconos;