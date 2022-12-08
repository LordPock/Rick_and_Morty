import { Outlet } from 'react-router-dom';
import styles from './About.module.css'


export default function About() {
   
    return (
       <div className={styles.about}>
         <div className={styles.about2}>
            <h2 className={styles.h2}>Rick and Morty</h2>
            <hr/>
            <p className={styles.span}>Hola, mi nombre es Claudio, y esta SPA fue realizada como parte del M2 del bootcamp de HENRY.</p>
            
            <p className={styles.span}>Para el desarrollo utilice Javascript, React, React-Router-dom, Redux y mucho amor ♥.</p>

            <p className={styles.span}>Fue una actividad interesante, divertida, de a momentos frustrante, pero sobre todo enriquecedora. Ayudo a fijar los conocimientos teóricos y prácticos aprendidos en clase, a afianzar los lazos con los compañeros y TAs que siempre estuvieron dispuestos a dar una mano y sobre todo a ganar confianza en uno mismo y en sus pares a la hora de programar.</p>

            <p className={styles.span}>De Henry, al mundo, aquí llegué.</p>

            <h3>Claudio</h3>


            
            
         </div>
         <Outlet/>
       </div>
       
    );
 }