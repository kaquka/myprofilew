import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const NavBar = () => {
  const redirectToHome = () => {
    window.location.href = '/';
  };

  return (
    <nav className="max-w-screen px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <button onClick={redirectToHome} className="flex">
          <span className="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">
            Avendaño's presentation
          </span>
        </button>
        <div className="flex md:order-2 fadein-bot">
          <a href="https://github.com/kaquka">
            <img
              className="w-9 rounded-full"
              src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png"
              alt="github"
            />
          </a>
        </div>
        <div className="hidden md:flex justify-between items-center w-full md:w-auto md:order-1">
          <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `fadein-bot text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 ${
                    isActive ? 'inline-flex flex-col text-white transition-colors duration-300' : ''
                  }`
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `fadein-bot fadein-1 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 ${
                    isActive ? 'inline-flex flex-col text-white transition-colors duration-300' : ''
                  }`
                }
              >
                Sobre mí
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `fadein-bot fadein-2 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 ${
                    isActive ? 'inline-flex flex-col text-white transition-colors duration-300' : ''
                  }`
                }
              >
                Proyectos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `fadein-bot fadein-3 text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-gray-500 md:p-0 ${
                    isActive ? 'inline-flex flex-col text-white transition-colors duration-300' : ''
                  }`
                }
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
