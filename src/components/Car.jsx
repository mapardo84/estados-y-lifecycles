import React from 'react';
import styles from './Car.module.css';

export default function Car(props) {
  //Propiedades a recibir: title, price
  let title = props.title;
  let price = props.price

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