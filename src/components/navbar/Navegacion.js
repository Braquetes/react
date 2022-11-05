import React from "react";
import "./Navegacion.css";

function TarjetaHorizontal(props) {
  return (
    <nav className="nav">
      <ul className="lista">
        <li className="nav-item">
          <a href="http://localhost:3000">Brakeznit</a>
        </li>
        <li className="nav-item">
          <a href="restaurant">
            Restaurant
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default TarjetaHorizontal;
