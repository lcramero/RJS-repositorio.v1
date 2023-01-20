//Importaciones
//Modulos
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Estilos
import './index.css';
//Componentes
//import App from './App';
import NavBar from './components/navbar/NavBar.js';
import ItemsListContainer from './components/itemsListContainer/ItemsListContainer.js';
import ItemCategoryContainer from './components/itemCategoryContainer/ItemCategoryContainer.js'
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer.js';
import Footer from './components/footer/Footer.js';
import Home from './components/home/Home.js'
import AboutUs from './components/aboutUs/AboutUs.js'
//WebVitals
import reportWebVitals from './reportWebVitals';

//Logica - union de componentes y aplicacion
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <BrowserRouter>
      <NavBar nombre= "Seasonal" />
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/' element ={<ItemsListContainer />}/>
        <Route exact path='/category/:categoryId' element ={<ItemCategoryContainer />}/>
        <Route exact path='/category/:id' element ={<ItemsListContainer />}/>
        <Route exact path='/products/:productoId' element={<ItemDetailContainer />}/>
        <Route exact path ='/aboutus' element ={<AboutUs />}/>
      </Routes>
      
      <Footer />
      
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
