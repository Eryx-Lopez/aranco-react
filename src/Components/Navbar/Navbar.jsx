import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/aranco-logo.png'
import { HashLink } from 'react-router-hash-link'

{/* Importar links de la navbar */}
const navbarLinks = [
    { id: 1, title:"Inicio", href:"/#inicio" },
    { id: 2, title:"Nuestra Historia", href:"/#historia" },
    { id: 3, title:"Reseñas", href:"/#resenias" },
    { id: 4, title:"Referencias", href:"/referencias/#referencias" },
    { id: 5, title:"Preguntas frecuentes", href:"/preguntas-frecuentes/#faqs" }
]

{/* importar iconos de la navbar */}
const navbarIcons = [
    { id: 1, icon: 'bi bi-search', href: "#" },
    { id: 2, icon: 'bi bi-person-circle', href: "#" },
    { id: 3, icon: 'bi bi-cart', href: "#" },
]

const Navbar = () => {
    {/* Función para cambiar el menú según tamaño en pantalla */}
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <nav className='fixed top-0 left-0 w-full bg-black z-50 shadow-md'>
        {/* Navbar en escritorio */}
        <div className='flex justify-between items-center px-4 py-2 container mx-auto'>
            <div>
                <img src={logo} alt="Aranco" className='w-7.5'/>
            </div>   

            {/* Menú hamburguesa */}
            <button onClick={toggleMenu} className='md:hidden pr-4'>
                <svg className='w-6 h-6' 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                >
                    {isOpen ? ( 
                        /* BOTÓN X*/
                        <path 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        color='white'
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                        /> 
                    ) : (
                        /* BOTÓN 3 LINEAS HORZ*/
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                            color='white'
                        />
                    )}
                    
                     
                </svg>
            </button>

            {/* Sección links desktop (El map recorre el array de los links, para que el código sea más limpio y modular) */}
            <div className='hidden md:block'>
                <ul className='flex space-x-8'>
                    {navbarLinks.map((link)=>(
                        <li key={link.id} className='text-lg border-b-2 border-transparent hover:border-white text-white py-1 transition-transform hover:scale-105 transform inline-block duration-300'>
                            {link.href.includes("#") ? (
                                //El HashLink es para hacer scroll suave a secciones dentro de la misma página, el Link es para navegar a otras páginas
                                <HashLink 
                                smooth to={link.href}>
                                    {link.title}
                                </HashLink>
                            ) : (
                                <Link 
                                to={link.href}
                                >
                                    {link.title}
                                </Link>                        
                            )}
                        </li>
                    ))}    
                </ul>
            </div>     

            {/* Sección iconos desktop */}
            <div className='hidden md:block'>
                <ul className='flex space-x-8'>
                    {navbarIcons.map((icon)=> (
                        <li key={icon.id}>
                            <a href={icon.href}>
                                <i className={`${icon.icon} text-xl transition-transform hover:scale-120 transform inline-block duration-300 text-white`} >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {/* Menú para telefono*/}
            <div className= {`md:hidden absolute w-full bg-black shadow-sm shadow-white transition-all duration-700 ${isOpen ? 'block' : 'hidden'}`} >
                <ul className='flex flex-col px-4 py-2'>
                    {navbarLinks.map((link)=>(
                        <li key={link.id} className='py-2 text-center text-white' >
                            {link.href.includes("#") ? (
                                <HashLink onClick={()=>setIsOpen(false)}
                                smooth to={link.href}>
                                    {link.title}
                                </HashLink>
                            ) : (
                                <Link onClick={()=>setIsOpen(false)}
                                to={link.href}
                                >
                                    {link.title}
                                </Link>                        
                            )}
                        </li>
                    ))}    
                </ul>

                <ul className='flex space-x-7 justify-center py-3 border-t border-red-950'>
                    {navbarIcons.map((icon)=> (
                        <li key={icon.id}>
                            <a href={icon.href}>
                                <i className={`${icon.icon} text-lg text-white`} >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

    </nav>
  )
}

export default Navbar
