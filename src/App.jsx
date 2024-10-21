import './App.css'
import './Header.css'

import { Link, Outlet } from 'react-router-dom';


function App() {

  return (
    <>
       <header className='header'>
          <h2>Welcome to React Router</h2>
          </header>
       <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link>
      </nav>
      <Outlet />
     
    </>
  )
}

export default App
