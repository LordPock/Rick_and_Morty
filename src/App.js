import styles from './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route, Outlet, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import Error from './components/Error'
import Form from './components/Form'

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
            setCharacters([...characters, data,]);
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
  
    const [access, setAccess] = useState(false)
    const username = 'cditoro@gmail.com'
    const password = 'Pocket10'

    function login(userData) {
      if (userData.password && userData.username) {
      if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home')
      } else {
        alert('No existen registros con esos datos')
      }
    }
    }

    const navigate = useNavigate()
    const location = useLocation()
  
  //   useEffect(() => {
  //     !access && navigate('/');
  //  }, [access]);

    if(location.pathname === '/') {
      return (
     
        <div className='App' style={{ padding: '25px' }}>
          <Routes>
            <Route path='/' element={<Form login={login} className={styles.form} />} />
            <Route path=':404' element={<Error />}/>  
          </Routes>
        </div>)
    } else {
  return (
     
    <div className='App' style={{ padding: '25px' }}>
        <Nav 
        OnSearch={OnSearch}
        random={random}
        />
        <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path=':404' element={<Error />}/>
      </Routes>
      
     <Outlet/>
    </div>
  )
}
}
export default App

