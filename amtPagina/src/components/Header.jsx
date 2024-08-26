import React from "react";
import "./css/heder.css";

function Header(props) {
  return (
    <>
      <div className="w-100">
        <img src={props.imagen} alt={props.alter} className=" w-100 h-100" />
      </div>

      <div className="leneazul"></div>
    </>
  );
}

export default Header;
