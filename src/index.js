import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TarjetaHorizontal from './components/card/TarjetaHorizontal';
import reportWebVitals from './reportWebVitals';
import Navegacion from './components/navbar/Navegacion'
// import Ut from './components/ut/Ut';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elem1 = <TarjetaHorizontal name="Ensalada de frutas" descripcion="La ensalada de frutas es un plato fresco, saludable, lleno de color y sabor. Es rica en fibras, vitaminas y minerales y, si se le agrega jugo de limón, es un buen aliado como antioxidante. La ensalada de frutas es un plato fresco, saludable, lleno de color y sabor." texto="" alt="foto" imagen="ensaladaFrutas.png"/>;
const elem2 = <TarjetaHorizontal name="Pizza Peperoni" descripcion="La pizza es probablemente el plato más común en la carta de cualquier restaurante italiano. Se trata de un pan plano horneado, habitualmente de forma redonda, elaborado con harina de trigo, sal, agua y levadura, cubierto con salsa de tomate y queso." texto="" alt="foto" imagen="pizza.png"/>;
const elem3 = <TarjetaHorizontal name="Cereal" descripcion="Aportan una gran cantidad de energía y nutrientes en comparación con otras fuentes de carbohidratos. Destaca su contenido en hierro, potasio, fósforo y calcio, aunque este último se absorbe menos por la presencia del ácido fítico." texto="" alt="foto" imagen="cereal.jpeg"/>;
const elem4 = <TarjetaHorizontal name="Frappé" descripcion="El café frappé o café frapé (del griego φραπέ, frapé) es un café con hielo cubierto de espuma elaborado a partir de café instantáneo. Es muy popular en Grecia y Chipre, especialmente durante el verano, si bien se ha extendido a otros países." texto="" alt="foto" imagen="frappe.jpg"/>;
const nav = <Navegacion/>
// const elem1 = <Ut></Ut>
root.render(
    <React.StrictMode>
        {nav}
        {elem1}
        {elem2}
        {elem3}
        {elem4}
    </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();