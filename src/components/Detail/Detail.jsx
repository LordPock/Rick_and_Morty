import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styles from './Detail.module.css';

export default function Detail() { 
   
   const { detailId } = useParams()
   const [character, setCharacter] = useState({});

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               setCharacter(char);
            } else {
               window.alert('No hay personajes con ese ID');
            }
         })
         .catch((err) => {
            window.alert('No hay personajes con ese ID');
         });
      return setCharacter({});
   }, [detailId]);
    
   return (
      
      <div className={styles.div}>
         <div className={styles.detail}>
            <div className={styles.detail2}>
               <h2 className={styles.nombre}>{character.name}</h2>
               <h3 className={styles.default}>Status: {character.status}</h3>
               <h3 className={styles.default}>Especie: {character.species}</h3>
               <h3 className={styles.default}>Género: {character.gender}</h3>
               <h3 className={styles.default}>Origen: {character.origin?.name}</h3>
            
            </div>
         </div>
         <div className={styles.imagen}>
         <img src={character.image} alt='No encontrado' className={styles.img}/>
         <Link to={'/home'}>
               <button className={styles.button}>Volver</button>
               </Link>
         </div>
      </div>
   
   )  
}
