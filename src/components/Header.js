import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import logo from "../images/trade.png";
import "./css/Header.css";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuToggle = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="menu" onClick={menuToggle}>
        <img src={Menu} alt="svg-menu" />
      </div>
      <nav>
        <ul className={toggle ? "toggle" : ""}>
          <Link name="home" to="/home">
            <li>Home</li>
          </Link>
          <li>
            <a
              name="sobre"
              target="_blank"
              rel="noreferrer"
              href="http://tradetechnology.com.br/sobre"
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              name="contato"
              target="_blank"
              rel="noreferrer"
              href="http://tradetechnology.com.br/contato"
            >
              Contato
            </a>
          </li>
          <Link name="city" to="/interna">
            <li>Cidades</li>
          </Link>
          <li className="close" onClick={menuToggle}>
            <img src={Close} alt="svg-close" />
          </li>
        </ul>
      </nav>
      <Link data-testid="logo" to="/">
        <img src={logo} alt="trade-logotipo" />
      </Link>
    </header>
  );
}

export default Header;
