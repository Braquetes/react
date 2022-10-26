import React from "react";
import './TarjetaHorizontal.css';



function TarjetaHorizontal(props) {
  return (
    <div className="TarjetaHorizontal">
        <div className="contenedor">
            <img className="imagen-rb" src={require (`../../assets/img/`+props.imagen)} alt="props.alt"></img>
            <div className="container-texto">
              <h5 className="nombre">{props.name}</h5>
            </div>
        </div>
      </div>
    );
  }
  
  export default TarjetaHorizontal;