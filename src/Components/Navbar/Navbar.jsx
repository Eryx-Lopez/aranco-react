import { Link } from 'react-router-dom'
import logo from '../../Assets/aranco-logo.png'
import { HashLink } from 'react-router-hash-link'

const navbarLinks = [
    { id: 1, title:"Inicio", href:"/#inicio" },
    { id: 2, title:"Nuestra Historia", href:"/#historia" },
    { id: 3, title:"Catálogo", href:"/catalogo/#catalogo" },
    { id: 4, title:"Reseñas", href:"/#resenias" },
    { id: 5, title:"Preguntas frecuentes", href:"/preguntas-frecuentes/#faqs" }
]

const navbarIcons = [
    { id: 1, icon: 'bi bi-search', href: "#" },
    { id: 2, icon: 'bi bi-person-circle', href: "#" },
    { id: 3, icon: 'bi bi-cart', href: "#" },
]

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white z-50 shadow-md'>
        <div className='flex justify-between items-center px-4 py-2'>
            <div>
                <img src={logo} alt="Aranco" className='w-7.5'/>
            </div>   

            {/* El map recorre el array de los links, para que el código sea más
            limpio y modular */}
            <div>
                <ul className='flex space-x-8'>
                    {navbarLinks.map((link)=>(
                        <li key={link.id}>
                            {link.href.includes("#") ? (
                                <HashLink className='text-lg border-b-2 border-transparent hover:border-black py-1 transition-transform hover:scale-105 transform inline-block duration-300'
                                smooth to={link.href}>
                                    {link.title}
                                </HashLink>
                            ) : (
                                <Link className='text-lg border-b-2 border-transparent hover:border-black py-1 transition-transform hover:scale-105 transform inline-block duration-300'
                                to={link.href}
                                >
                                    {link.title}
                                </Link>                        
                            )}
                        </li>
                    ))}    
                </ul>
            </div>     

            <div>
                <ul className='flex space-x-8'>
                    {navbarIcons.map((icon)=> (
                        <li key={icon.id}>
                            <a href={icon.href}>
                                <i className={`${icon.icon} text-xl transition-transform hover:scale-120 transform inline-block duration-300 hover:text-gray-600`} >

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
