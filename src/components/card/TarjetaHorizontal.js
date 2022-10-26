import React from "react";
import './TarjetaHorizontal.css';



function TarjetaHorizontal(props) {
  return (
    <div className="TarjetaHorizontal">
        <div className="contenedor">
            <img className="imagen-rb" src={require (`../../assets/img/`+props.imagen)} alt="props.alt"></img>
            <div className="container-texto">
              <h1 className="nombre">{props.name}</h1>
              <h5 className="descripcion">{props.descripcion}</h5>
              <p className="texto">{props.texto}</p>
            </div>
        </div>
      </div>
    );
  }
  
  export default TarjetaHorizontal;