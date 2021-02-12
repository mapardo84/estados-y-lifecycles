import './App.css';
import SearchBar from './components/SearchBar';
import Cars from './components/Cars';
import React, { useState } from 'react';
import "./App.css"

//Componente origen, se maneja el estado de los anuncios existentes, desde aqui se renderiza la barra de busqueda
//y el contenedor de los anuncios
function App() {
  const [ads, setAd] = useState(getAnuncios());

  //funcion que se encarga de agregar los datos a el estado de react
  //e hipoteticamente tambien se encarga de subir los datos al backend
  function send(titulo, valor){
    //Se agregan los datos a el estado del componente
    setAd(antiguo => [...antiguo, {price:valor, title:titulo}])
    //Aqui deberia abajo ir el llamado al backend con fetch o algo asi
  }
  //Simulacion de la obtencion de datos desde un backend
  //Igualente aqui deberia ir un fetch pidiendole los datos al backend
  function getAnuncios(){
    return [{price:"50000", title:"BMW"},{price:"10000",title:"AMAROK"}]
  }
  //Se retorna la searchbar y cars, cuando se actualice la search cars tambien se vera actualizado
  return (
    <div className="app">
       <div>
       <SearchBar send={send}></SearchBar>
       <Cars ads={ads}></Cars>
       </div>
    </div>
  );
}

export default App;
