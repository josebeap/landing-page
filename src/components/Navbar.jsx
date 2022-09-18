import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className='flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3 fixed w-full'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            <Link to={"/"}>
              <Logo />
            </Link>
            <button
              className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id='example-navbar-danger'
          >
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <Link to='/inicio'>
                <span className='ml-2 text-white text-xl'>Inicio</span>
              </Link>
              <Link to='/perfil'>
                <span className='ml-2 text-white text-xl'>Perfil</span>
              </Link>
              <Link to='/estudios'>
                <span className='ml-2 text-white text-xl'>Estudios</span>
              </Link>
              <Link to='/experiencia'>
                <span className='ml-2 text-white text-xl'>Experiencia</span>
              </Link>
              <Link to='/portafolio'>
                <span className='ml-2 text-white text-xl'>Portafolio</span>
              </Link>
              <Link to='/contacto'>
                <span className='ml-2 text-white text-xl'>Contacto</span>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
