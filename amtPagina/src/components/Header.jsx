import React from "react";

function Header(props) {
  return (
    <div>
      <img src={props.imagen} alt={props.alter} />
    </div>
  );
}

export default Header;
