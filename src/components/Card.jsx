import { Link } from 'react-router-dom';
import styles from './Card.module.css';

export default function Card(props) {
   return (
      <div className={styles.div}>
         <div id={props.id} className={styles.card} key={props.id}>
            <img  src={props.image} alt="No encontrado" /> 
            <Link to={`/detail/${props.id}`} className={styles.name}>
            <h2 className={styles.name}>{props.name}</h2>
            </Link>
            <h2 className={styles.id}>Id: {props.id}</h2>
            <button className={styles.button} onClick={() => props.onClose(props.id)}>X</button> 
         </div>
      </div>
   );
}
