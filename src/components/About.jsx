import { Outlet } from 'react-router-dom';
import styles from './About.module.css'


export default function About() {
   
    return (
       <div className={styles.about}>
         <div className={styles.about2}>
            <h2 className={styles.h2}>Rick and Morty</h2>
            <hr/>
            <p className={styles.span}>Hola, mi nombre es Claudio, y esta SPA fue realizada como parte del M2 del bootcamp de HENRY.</p>
            
            <p className={styles.span}>Para el desarrollo utilice Javascript, React, React-Router-dom y mucho amor ♥.</p>
            
            
         </div>
         <Outlet/>
       </div>
       
    );
 }