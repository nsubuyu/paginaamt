import React from "react";
import "./css/heder.css";

function Header(props) {
  return (
    <>
      <figure >
      <img src={props.imagen} alt={props.alter} className=" w-100 h-100 headerm" />
      </figure>
        
      

      <div className={props.clase}></div>
    </>
  );
}

export default Header;
