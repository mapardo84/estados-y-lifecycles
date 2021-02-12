import React, {useState} from 'react';
import styles from './SearchBar.module.css';

//Este componente se encargara de mostrar la searchbar y cuando se de click en el boton
//subir los datos a un backend hipotetico y actualizar estados (eso lo hace app.js)
export default function SearchBar(props){
  //Hook para guardar el stado del input
  const [inputValue, setInputValue] = useState("")

  //Se guarda la funcion para enviar datos
  let send = props.send;
  //En caso de que no llegue se define una por defecto
  if (send === undefined) send = () => alert("La funcion send no esta definida")

  return (
    <div className={styles.search}>
      <div className={styles.buscador}>
        <input 
        className={styles.input} 
        id="txtCiudad" 
        type="text" 
        placeholder="Ingresa un automovil"
        //Cuando se modifique el input se va a modificar el estado de este
        onChange={(e)=>setInputValue(e.target.value)}/>
      </div>
      <div className={styles.btnBuscar}>
        {/* Cuando se de click en el boton se va a utilizar la funcion send, al componente no le
        interesa como funciona send, el solo la llama */}
        <button className={styles.btn} onClick={()=>send((inputValue),"500")}>Buscar</button>
      </div>
    </div>
    )
  
}
