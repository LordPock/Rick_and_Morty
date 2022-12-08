import { Outlet } from 'react-router-dom';
import styles from './Error.module.css'


export default function Error() {
   
    return (
       <div className={styles.diverror}>
         <div className={styles.div}>
            <div className={styles.datos}>
               <h2 className={styles.error}>¿Qué haces acá?</h2>
               <hr/>
               <p className={styles.p}>Lo que buscas no existe, volve por donde llegaste.</p>
            </div>
         </div>   
            <Outlet/>
       </div>
       
    );
 }