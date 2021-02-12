import React from 'react';
import styles from './Car.module.css';

//En este componente se renderiza un anuncio, que posee un nombre y un precio
export default function Car(props) {
  //Propiedades a recibir: title, price
  let title = props.title;
  let price = props.price

  //En caso de que no se envien las propiedades que se necesitan se
  //tienen valores por defecto
  if (title === undefined) title = "Sin definir" ;
  if (price === undefined) price = "0"

  
  return (
  <div className={styles.car}>
    <div className={styles.title}>
      <span>{title}</span>
    </div>
    <div className={styles.price}>
        <span>Precio: ${price}</span>
    </div>
  </div>
  )
};