import React from 'react';
import styles from './SearchBar.module.css';

export default class SearchBar extends React.Component{
  constructor(props){
    super(props)
    this.send = props.send;
    this.state = {input:""}

    if (this.send === undefined) this.send = () => alert("La funcion send no esta definida")
  }
  saveInputValue(value){
    this.setState({input:value})
  }

  render(){
    return (
      <div className={styles.search}>
        <div className={styles.buscador}>
          <input 
          className={styles.input} 
          id="txtCiudad" 
          type="text" 
          placeholder="Ingresa un automovil"
          onChange={(e)=>this.saveInputValue(e.target.value)}/>
        </div>
        <div className={styles.btnBuscar}>
          <button className={styles.btn} onClick={()=>this.send((this.state.input),"500")}>Buscar</button>
        </div>
      </div>
      )
  }
}
