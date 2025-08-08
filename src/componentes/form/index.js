import React from "react";
import "./style.css";

const Formu = (props) => {
  return (
    <form>
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={props.onChange}
        id="inputzao"
        type={props.tipo}
        placeholder={props.placeholder}
        required
      />
    </form>
  );
};
export default Formu;
