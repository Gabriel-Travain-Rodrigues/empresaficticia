import React from "react";
import "./style.css";
const Listona = (props) => {
  return (
    <ul className="lista-itens">
      <li className="lista-item">{props.item}</li>
    </ul>
  );
};
export default Listona;
