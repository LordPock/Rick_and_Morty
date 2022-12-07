import React from 'react';
import Card from './Card';
import styles from './Favorites.module.css';



export function Favorites(props) {

   console.log(props)
   return (
      <div className={styles.cards}>
         {props.myFavorites.map(c  =>
          <Card
            id={c.id}
            key={c.id}
            name={c.name}
            image={c.image}
            onClose={props.onClose}
          />
         )}
      </div>
   
   )  
}

