import React from 'react';
import Car from './Car';
import styles from './Cars.module.css';

export default class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: props.ads};
      }
    render() {
      return (
        <div>
            {this.state.cars.map(car =>{
                return <Car title={car.title} price={car.price}></Car>
                }
            )}
        </div>
      );
    }
  }
