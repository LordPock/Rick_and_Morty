import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import React from 'react'
import {useState, useEffect} from 'react'



function App () {
  
  const [characters, setCharacters] = useState([]);

  const searchCard = (props) => {
    const busquedita = document.getElementById(`${props}`)
      if (busquedita === null) {
        return true;
      } else {
        return false;
      }
    }
  
    const onClose = (e) => {
      //let borrar = e.target.parentElement.id
      //console.log(borrar)
      setCharacters(characters.filter(data => data.id !== e))
      }

    const agregar = (e) => {
      fetch(`https://rickandmortyapi.com/api/character/${e}`)
         .then((res) => res.json())
         .then((data) => {
            if(data.id) {
            setCharacters([...characters, {
              id: data.id,
              name: data.name,
              species: data.species,
              gender: data.gender,
              image: data.image,
              status: data.status,
            },]);
          }   else {
            window.alert('No existe ese personaje')
          }
         })
        }
        
        
    const OnSearch = () => {
      const id = document.querySelector('#input').value
      if (!searchCard(id)) {
      return window.alert('Ya existe ese personaje');
      } else { 
        agregar(id)
      }
      
    }

    const random = () => {
      const id = Math.floor(Math.random()* 827)
      if (!searchCard(id)) {
      random();
      } else { 
        agregar(id)
      } 
    }
  



 
  return (
    
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
        //  onSearch={(characterID) => window.alert(characterID)}
        OnSearch={OnSearch}
        random={random}
        />
      </div>
      
      <div className='Cards'>
        <Cards
          characters={characters}
          onClose={onClose}
        />
      </div>
      
    </div>
  )
}

export default App

