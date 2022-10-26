import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TarjetaHorizontal from './components/card/TarjetaHorizontal';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const elem1 = <TarjetaHorizontal name="Rodolfo Braquetes" descripcion="Fullstack" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." alt="foto" imagen="bg.jpg"/>;
const elem2 = <TarjetaHorizontal name="Jose Alfredo" descripcion="They want to play, lets played" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." alt="foto" imagen="chamber.jpeg"/>;
const elem3 = <TarjetaHorizontal name="Travis Scott" descripcion="Escenarios traviesos" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." alt="foto" imagen="travis.jpeg"/>;
const elem4 = <TarjetaHorizontal name="Diego Maicrack" descripcion="Messiento elegante" texto="Lorem ipsum dolor sit amet consectetur adipiscing, elit vel mattis tellus nisi nulla duis, malesuada morbi neque venenatis fringilla. Lectus at magna nisl vehicula erat purus aptent inceptos tellus curabitur pulvinar, tincidunt etiam maecenas mus id metus non integer dis. Senectus pellentesque massa euismod donec suspendisse phasellus nunc, sodales egestas dignissim tempus maecenas vivamus, semper justo est litora integer curae." alt="foto" imagen="messi.jpeg"/>;
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