import React from 'react';
import Car from './Car';
import styles from './Cars.module.css';

export default class Cars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cars: [{price:"50000", title:"BMW"},{price:"10000",title:"AMAROK"}]};
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
