import React from "react";
import logo from '../../assets/img/ti.png'
import './Ut.css';



function Ut() {
    return (
        <div>
            <div className="contenedor">
                <div className="contenedor-img">
                <img className="imagen-rb" src={logo} alt="props.alt"></img>
                </div>
                <div className="container-texto">
                    <h1 className="nombre">Tecnologías de la información</h1>
                </div>
                <div className="contenedor-card">
                    <div className="texto card">
                        <h1>Objetivo</h1>
                        <p>Brindar educación superior tecnológica apoyada por capital intelectual e infraestructura pertinente, a través del plan de estudio basado en competencias que permita adquirir conocimiento y práctica necesaria en el sector productivo, social y tecnológico en ámbitos locales, regionales, nacionales e internacionales.</p>
                    </div>
                    <div className="texto card">
                        <h1>Grados que otorga</h1>
                        <ul>
                            <li>TSU: Técnico Superior Universitario</li>
                        <li>Tecnologías de la Información
                            Ing: Ingeniería
                            Tecnologías de la Información</li>
                        <li>Doble titulación en 3 años 8 meses
                        </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="contenedor-card-verde">
                <div className="contenedor-card-verde-p">
                    <div className="texto-blanco card">
                        <h1>Misión</h1>
                        <p>Integrar las experiencias, aspiraciones, competencias y valores de nuestros estudiantes, en un profesional de las Tecnologías de la Información, capaz de contribuir a la sociedad y al conocimiento global a través del emprendimiento de ideas innovadoras, sustentables y multidisciplinarias con sentido humano.</p>
                    </div>
                    <div className="texto card">
                        <h1>Visión</h1>
                        <p>Ser un programa educativo de Tecnologías de la Información que contribuya a la formación de técnicos profesionales en Tecnologías de la Información adaptables a situaciones de cambio, transferencia de conocimiento y vinculación nacional e internacional para contribuir al desarrollo educativo, social, económico y ambiental.</p>
                    </div>
                    
                </div>
                </div>
                <div className="contenedor-card-verde">
                <div className="contenedor-card-verde-p">
                    <div className="texto card">
                        <h1>Perfil de ingreso</h1>
                        <p>Bachillerato o similar con especialidad en el área físico-matemático o técnico en Informática.</p>
                        <p>Tener capacidad creativa, crítica y analítica, de pensamiento estructurado, razonamiento lógico-matemático, liderazgo, auto aprendizaje, trabajo autónomo y en equipo.</p>
                    </div>
                    <div className="texto card">
                        <h1>Perfil de egreso</h1>
                        <span className="amarillo">TSU en Tecnologías de la Información</span><br></br>
                        <span className="amarillo">Ing. en Tecnologías de la Información</span>
                        <p>Es un o una profesional con visión emprendedora, con la capacidad de desempeñar funciones de consultoría y auditoría en el campo de las Tecnologías de la Información.</p>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
    );
}

export default Ut;