import { NavLink, Route, Router,Routes } from "react-router-dom"
import ContenedorContactos from"./Components/ContenedorContactos/ContenedorContactos"
import AgregarContacto from "./Components/AgregarContactos/AgregarContactos"
import NotFound from "./Components/NotFound/NotFound"
import styles from './App.module.css'
import TabButton from "./Components/TabButton/TabButton"
import EliminarContactoButton from "./Components/EliminarContactoButton/EliminarContactoButton"

function App() {
  function isActive(value){
      if(value === true)
        {
          return styles.active
        }
  }
  return (
    <>
    <header>
    <nav>
      <ul className={styles.navbar}>
        <li>
          <NavLink className={(active) => active.isActive ? styles.active : null} to={'/agregar-contacto'}>Agregar</NavLink>
        </li>
        <li>
          <NavLink className={(active) => active.isActive ? styles.active : null} to={'/'}>Home</NavLink>
        </li>
      </ul>
    </nav>
      
    </header>

      <Routes>
        <Route path='/' element={<ContenedorContactos />}></Route>
        <Route path='/agregar-contacto' element={<AgregarContacto />}></Route>
        <Route path='/agregar-contacto/:id' element={<AgregarContacto />}/>
        <Route path='/EliminarContacto' element={<EliminarContactoButton/>} />
        <Route path='/EliminarContacto/:id' element={<EliminarContactoButton/>} />
        <Route path="*" element={<NotFound />}></Route>
        
      </Routes>
    </>
  
  )
}

export default App
