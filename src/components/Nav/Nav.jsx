import { Link, NavLink, useLocation } from 'react-router-dom';
import styles from './Nav.module.css'
import SearchBar from '../SearchBar/SearchBar'
import { useDispatch } from 'react-redux';
import { filterCards } from '../../redux/actions';


export default function Nav(props) {
   const location = useLocation()
   const dispatch = useDispatch()


   function handleFilter() {
      dispatch(filterCards('All'))
   }
    return (
        
       <div className={styles.nav}>
         <div>
            <NavLink to={'/home'} className={({isActive}) => isActive ? styles.isActive : styles.home}>
               Home
            </NavLink>
            <NavLink to={'/about'} className={({isActive}) => isActive ? styles.isActive : styles.home}>
               About
            </NavLink>
            <NavLink to={'/'} className={({isActive}) => isActive ? styles.isActive : styles.home} onClick={props.logout}>
               Logout
            </NavLink>
         </div>
         {location.pathname === '/home' ? 
        <SearchBar 
        OnSearch={props.OnSearch}
        random={props.random}/> : 
        <Link to={'/home'}><button className={styles.button} onClick={handleFilter}>Volver</button>
        </Link> }
       </div>
       
    );
 }