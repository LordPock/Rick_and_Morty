import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';


export default function Cards(props) {
   const { characters } = props;
   return (
      <div className={styles.cards}>
         {characters.map(c  =>
          <Card
            id={c.id}
            key={c.id}
            name={c.name}
            image={c.image}
            onClose={props.onClose}
            gender={c.gender}
          />
         )}
      </div>
   
   )  
}
