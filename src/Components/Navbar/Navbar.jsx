import React from 'react'
import logo from '../../Assets/aranco-logo.png'

const navbarLinks = [
    { 
        id: 1,
        title:"Inicio",
        href:"#"
    },
    { 
        id: 2,
        title:"Nuestra Historia",
        href:"#"
    },
    { 
        id: 3,
        title:"Catálogo",
        href:"#"
    },
    { 
        id: 4,
        title:"Reseñas",
        href:"#"
    },
    { 
        id: 5,
        title:"Preguntas frecuentes",
        href:"#"
    }
]

const navbarIcons = [
    {
        id: 1,
        icon: 'bi bi-search',
        href: "#"
    },
    {
        id: 2,
        icon: 'bi bi-person-circle',
        href: "#"
    },
    {
        id: 3,
        icon: 'bi bi-cart',
        href: "#"
    },
]

const Navbar = () => {
  return (
    <nav>
        <div className='flex justify-between items-center px-4 py-2'>
            <div>
                <img src={logo} alt="Aranco" className='w-[30px]'/>
            </div>   

            {/* El map recorre el array de los links, para que el código sea más
            limpio y modular */}
            <div>
                <ul className='flex space-x-8'>
                    {navbarLinks.map((link)=>(
                        <li key={link.id}>
                            <a className='text-lg border-b-2 border-transparent hover:border-black py-1 transition-transform hover:scale-102
                            transform inline-block duration-300'
                                href={link.href}>
                                {link.title}
                            </a>
                        </li>
                    ))}    
                </ul>
            </div>     

            <div>
                <ul className='flex space-x-8'>
                    {navbarIcons.map((icon)=> (
                        <li key={icon.id}>
                            <a href={icon.href}>
                                <i className={`${icon.icon} text-lg transition-transform hover:scale-102 transform inline-block duration-300 hover:text-gray-600`} >

                                </i>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
