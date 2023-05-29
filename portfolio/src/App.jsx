import { useState } from 'react'
import './styles/styles.css'


function App() {
  

  return (
    <div className="page">
      <div className="container">
          <nav className='menu'>
              <span>
                Mi portfolio
              </span>
              <ul>
                <li>Presentación</li>
                <li>Proyectos</li>
                <li>Galería</li>
                <li>Contacto</li>
              </ul>
          </nav>
      </div>
      <div className="content">
        <h1>
          Web Developer
        </h1>
        <img src='/fotera.jpg' className='foto' alt="Profile picture" srcset="" />
        <h2>Leonardo Gauna</h2>
      </div>
    </div>


  )
}

export default App
