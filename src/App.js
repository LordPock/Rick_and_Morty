import styles from './App.css'
import Cards from './components/Cards/Cards'
import Nav from './components/Nav/Nav'
import React from 'react'
import {useState, useEffect} from 'react'
import { Routes, Route, Outlet, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Error from './components/Error/Error'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
import { useDispatch } from 'react-redux'
import { deleteFavorite } from './redux/actions'

function App () {
 
  const dispatch = useDispatch()
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
      dispatch(deleteFavorite(e))
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
        document.getElementById('input').value = ''
      }

    }

    const random = () => {
      const id = Math.ceil(Math.random()* 826)
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

    function logout () {
      setAccess(false);
    }

    const navigate = useNavigate()
    const location = useLocation()
  
    useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line
   }, [access]);

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
        logout={logout}
        />
        <Routes>
        <Route path='/' element={<Form />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        <Route path=':404' element={<Error />}/>
        <Route path='/Favorites' element ={<Favorites />}/>
      </Routes>
      
     <Outlet/>
    </div>
  )
}
}
export default App

