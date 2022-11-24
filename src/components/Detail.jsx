import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
//import Card from './Card';
import styles from './Detail.module.css';


export default function Detail(props) {
   const { detailId } = useParams()
   const [character, setCharacter] = useState({
      name: "",
      status: "",
      species: "",
      gender: "",
      origin: "",
      image: "",
   });

   useEffect(() => {
      fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
         .then((response) => response.json())
         .then((char) => {
            if (char.name) {
               
               setCharacter({...character,
                  name: char.name,
                  status: char.status,
                  species: char.species,
                  gender: char.gender,
                  origin: char.origin.name,
                  image: char.image
               });
               
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
         <h2 className={styles.nombre}>Nombre: {character.name}</h2>
         <h3 className={styles.default}>Status: {character.status}</h3>
         <h3 className={styles.default}>Especie: {character.species}</h3>
         <h3 className={styles.default}>Género: {character.gender}</h3>
         <h3 className={styles.default}>Origen: {character.origin}</h3>
         <img src={character.image} alt='No encontrado' />
         <Link to={'/'}>
            <button className={styles.button}>Volver</button>
         </Link>
      </div>
   
   )  
}
