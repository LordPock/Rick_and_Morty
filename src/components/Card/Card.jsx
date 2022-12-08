import { NavLink, useLocation } from 'react-router-dom';
import styles from './Card.module.css';
import { addFavorite, deleteFavorite } from '../../redux/actions'
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

export function Card(props) {
   const [isFav, setIsFav] = useState(false)
   const location = useLocation()
   
   function handleFavorite() {
      if (isFav) {
         setIsFav(false);
         props.deleteFavorite(props.id)
      } else {
         setIsFav(true);
         props.addFavorite(props)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line
   }, [props.myFavorites]);   

   return (
      <div className={styles.div}>
         <div id={props.id} className={styles.card} key={props.id}>
            <img  src={props.image} alt="No encontrado" /> 
            <NavLink to={`/detail/${props.id}`} className={styles.name}>
            <h2 className={styles.name}>{props.name}</h2>
            </NavLink>
            <h2 className={styles.id}>Id: {props.id}</h2>
            {location.pathname ==='/home' ?
            <button className={styles.button} onClick={() => props.onClose(props.id)}>X</button> 
            : null }
            {
            isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={styles.fav} onClick={handleFavorite}>🤍</button>
            )
         }
         </div>
      </div>
   );
}



export function mapDispatchToProps(dispatch) {
   return {
      addFavorite: (id) => dispatch(addFavorite(id)),
      deleteFavorite: (id) => dispatch(deleteFavorite(id))
   }
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);