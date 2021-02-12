import './App.css';
import SearchBar from './components/SearchBar';
import Cars from './components/Cars';
import React, { useState } from 'react';
import "./App.css"

function App() {
  const [ads, setAd] = useState(getAnuncios());

  function send(titulo, valor){
    setAd(ads.push({price:valor, title:titulo}))
    console.log(ads)
    //Aqui deberia ir el llamado al backend
  }
  function getAnuncios(){
    return [{price:"50000", title:"BMW"},{price:"10000",title:"AMAROK"}]
  }
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
