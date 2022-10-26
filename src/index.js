import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TarjetaHorizontal from './components/card/TarjetaHorizontal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elem1 = <TarjetaHorizontal name="Edgar" alt="foto" imagen="bg.jpg"/>;
const elem2 = <TarjetaHorizontal name="Rodolfo" alt="foto" imagen="bg.jpg"/>;
const elem3 = <TarjetaHorizontal name="Braquetes" alt="foto" imagen="foto.jpeg"/>;
const elem4 = <TarjetaHorizontal name="López" alt="foto" imagen="foto.jpeg"/>;
root.render(
    <React.StrictMode>
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