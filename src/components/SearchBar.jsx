import styles from './SearchBar.module.css'

export default function SearchBar(props) {
   
   return (
      <div>
         <input id='input' className={styles.input} type='search' />
      <button className={styles.button} onClick={props.OnSearch}>Agregar</button>
      <button className={styles.button} onClick={props.random}>Random</button>
      </div>
      
   );
}
