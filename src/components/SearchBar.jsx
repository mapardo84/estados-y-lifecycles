import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
  // acá va tu código
  return (
  <div className={styles.search}>
    <div className={styles.buscador}>
      <input className={styles.input} id="txtCiudad" type="text" placeholder="Ingresa una ciudad"/>
    </div>
    <div className={styles.btnBuscar}>
      <button className={styles.btn} onClick={()=>alert("holi")}>Buscar</button>
    </div>
  </div>
  )
};