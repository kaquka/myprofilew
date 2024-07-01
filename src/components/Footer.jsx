import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
      <nav className="flex justify-around py-4 text-xs">
        <Link to="/" className="text-gray-300 hover:text-white">Inicio</Link>
        <Link to="/about" className="text-gray-300 hover:text-white">Sobre mí</Link>
        <Link to="/projects" className="text-gray-300 hover:text-white">Proyectos</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white">Contacto</Link>
      </nav>
    </footer>
  )
}

export default Footer