import React, {useState} from 'react';
import styles from './SearchBar.module.css';


export default function SearchBar(props){
  //Hook para guardar el stado del input
  const [inputValue, setInputValue] = useState("")

  let send = props.send;
  if (send === undefined) send = () => alert("La funcion send no esta definida")

  return (
    <div className={styles.search}>
      <div className={styles.buscador}>
        <input 
        className={styles.input} 
        id="txtCiudad" 
        type="text" 
        placeholder="Ingresa un automovil"
        onChange={(e)=>saveInputValue(e.target.value)}/>
      </div>
      <div className={styles.btnBuscar}>
        <button className={styles.btn} onClick={()=>send((inputValue),"500")}>Buscar</button>
      </div>
    </div>
    )

  function saveInputValue(value){
    setInputValue(value)
  }
}
