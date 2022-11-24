import { Outlet } from 'react-router-dom';
import styles from './Error.module.css'


export default function Error() {
   
    return (
       <div className={styles.about}>
            <h2 className={styles.h2}>Que haces acá?</h2>
            <hr/>
            <span className={styles.span}>Hola, esto es una prueba, interesante lo que se puede lograr</span>
            <Outlet/>
       </div>
       
    );
 }