import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import SearchBar from './SearchBar'


export default function Nav(props) {
    
    return (
        
       <div className={styles.nav}>
         <div>
         <NavLink to={'/home'} className={({isActive}) => isActive ? styles.isActive : styles.home}>
            Home
         </NavLink>
         <NavLink to={'/about'} className={({isActive}) => isActive ? styles.isActive : styles.home}>
            About
         </NavLink>
         </div>
        <SearchBar 
        OnSearch={props.OnSearch}
        random={props.random}/>
       </div>
       
    );
 }