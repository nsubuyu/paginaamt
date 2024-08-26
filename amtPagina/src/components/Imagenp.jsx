import React from "react";

function Imagenp(props) {
  return (
    <div className="d-flex">
        <div className=" w-25">
            <img src={props.imagen} alt={props.alter} className="max-width: 100% height: auto img-fluid" />
        
        </div>
       
        <div>
          <h1 className="">{props.titulo}</h1>
        </div>
        
        <div>
          <p>{props.body}</p>
          </div>
        
        
        
    </div>
  );
}

export default Imagenp;
