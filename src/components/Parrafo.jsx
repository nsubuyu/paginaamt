import React from "react";


function Parrafo(props) {
  return (
    <div className="">
      <div className="quien">
        <p>
          <strong>QUIENES SOMOS</strong>
        </p>
      </div>
      <div className="mt-3 quien2">
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default Parrafo;
