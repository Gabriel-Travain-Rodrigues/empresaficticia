import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Header = () => {
  return (
    <nav className="navbar">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/services">Serviços </Link>
      </li>
      <li className="nav-item">
        <Link to="/contato">Contato</Link>
      </li>
      <li className="nav-item">
        <Link to="*">Sobre</Link>
      </li>
    </nav>
  );
};
export default Header;
