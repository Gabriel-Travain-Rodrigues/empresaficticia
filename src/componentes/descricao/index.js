import React from "react";
import "./style.css";
const Descricao = (props) => {
  return (
    <div>
      <h2 className="titulo">{props.titulo}</h2>
      <p>{props.texto}</p>
    </div>
  );
};
export default Descricao;
