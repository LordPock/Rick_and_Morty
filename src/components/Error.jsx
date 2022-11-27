import { Outlet } from 'react-router-dom';
import styles from './Error.module.css'


export default function Error() {
   
    return (
       <div className={styles.diverror}>
         <div>
            <h2 className={styles.error}>Que haces acá?</h2>
            <hr/>
            <span className={styles.error}>Hola, esto es una prueba, interesante lo que se puede lograr</span>
            <img src='/public/img/error.png' alt='Error' />
         </div>   
            <Outlet/>
       </div>
       
    );
 }