import React from "react";
import "./style.css";
const Botaun = (props, onClick) => {
  return (
    <button className="botao" onClick={props.onClick}>
      {props.botao}
    </button>
  );
};
export default Botaun;
