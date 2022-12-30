//Importaciones
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
//Estilos
import './index.css';
//Componentes
//import App from './App';
import NavBar from './components/navbar/NavBar.js';
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer.js'
import Footer from './components/footer/Footer';
//WebVitals
import reportWebVitals from './reportWebVitals';

//Logica - union de componentes y aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar nombre= "Seasonal"></NavBar>
    <ItemsListContainer greetings = "Hola mundo!"></ItemsListContainer>
    <Footer></Footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
