import styles from './Nav.module.css'
import SearchBar from './SearchBar'


export default function Nav(props) {
    
    return (
        
       <div className={styles.nav}>
        <SearchBar 
        OnSearch={props.OnSearch}
        random={props.random}/>
       </div>
       
    );
 }