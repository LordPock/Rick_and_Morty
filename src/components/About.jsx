import { Outlet } from 'react-router-dom';
import styles from './About.module.css'


export default function About() {
   
    return (
       <div className={styles.about}>
            <h2 className={styles.h2}>Pocket</h2>
            <hr/>
            <span className={styles.span}>Hola, esto es una prueba, interesante lo que se puede lograr</span>
            <Outlet/>
       </div>
       
    );
 }