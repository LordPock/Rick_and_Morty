import { NavLink } from 'react-router-dom';
import styles from './Nav.module.css'
import SearchBar from './SearchBar'


export default function Nav(props) {
    
    return (
        
       <div className={styles.nav}>
         <NavLink to={'/'}>
            Home
         </NavLink>
         <NavLink to={'/about'}>
            About
         </NavLink>
        <SearchBar 
        OnSearch={props.OnSearch}
        random={props.random}/>
       </div>
       
    );
 }