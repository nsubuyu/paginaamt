import React from "react";

function Header(props) {
  return (
    <figure className=" w-100">
      <img src={props.imagen} alt={props.alter} className=" w-100 h-100" />
    </figure>
  );
}

export default Header;
