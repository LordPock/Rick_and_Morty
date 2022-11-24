import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import React from 'react'
import {useState } from 'react'
import { Routes, Route, Outlet} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Error from './components/404'


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
        
        
    const OnSearch = (valor) => {
      if (!searchCard(valor)) {
      return window.alert('Ya existe ese personaje');
      } else { 
        agregar(valor)
      }
      agregar(valor)
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
        <Nav
        OnSearch={OnSearch}
        random={random}
        />
        <Routes>
        <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path=':404' element={<Error />}/>
      </Routes>
      
     <Outlet/>
    </div>
  )
}

export default App

