import { useState } from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState("")

   const HandleChange = (e) => {
      setCharacter(e.target.value)
   }
   return (
      <div>
         <input id='input' className={styles.input} type='search' onChange={HandleChange} />
      <button className={styles.button} onClick={()=> props.OnSearch(character)}>Agregar</button>
      <button className={styles.button} onClick={props.random}>Random</button>
      </div>
      
   );
}
