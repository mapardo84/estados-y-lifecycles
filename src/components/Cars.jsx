import Car from './Car';
import styles from './Cars.module.css';

//Este sera el componente que se encargara de renderizar los anuncios
export default function Cars(props){
    return (
      <div>
        {props.ads.map(ad => {
          return <Car title={ad.title} price={ad.price}></Car>
        })}
      </div>
      )   
}
