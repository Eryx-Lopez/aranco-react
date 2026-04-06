import React from 'react'
const footerIcons = [
    { id: 1, icon: 'bi bi-instagram', href: "#" },
    { id: 2, icon: 'bi bi-facebook', href: "#" },
    { id: 3, icon: 'bi bi-whatsapp', href: "#" },
]

const categoriasList = [
    { id: 1, text: 'Música', href: '' },
    { id: 2, text: 'Anime', href: '' },
    { id: 3, text: 'Series y películas', href: '' },
]

const acercaList = [
    { id: 1, text: 'Nosotros', href: '' },
    { id: 2, text: 'Contacto', href: '' },
    { id: 3, text: 'Solicitar factura', href: '' },
    { id: 4, text: 'Preguntas frecuentes', href: '' },
]

const legalList = [
    { id: 1, text: 'Términos y condiciones de promociones vigentes' , href: '' },
    { id: 2, text: 'Políticas de envío', href: '' },
    { id: 3, text: 'Políticas de privacidad', href: ''},
    { id: 4, text: 'Políticas de devolución', href: '' },   
]

const Footer = () => {
  return (
    <div className='bg-black text-white pt-15 content mx-auto'>
        <div className=' w-full flex flex-col md:gap-20 md:flex-row gap-10 2xl:gap-40 border-y border-neutral-700 py-4 justify-center '>
            <div className='px-20 md:px-0'>
                <h3>CATEGORIAS</h3>
                {categoriasList.map((categoria)=> (
                    <li key={categoria.id} className='max-w-37.5 wrap-break-word list-none mb-3'>
                        <a href={categoria.href}>
                        {categoria.text}
                        </a>
                    </li>
                ))}
            </div>
            
            <div className='px-20 md:px-0'>
                <h3>ACERCA DE</h3>
                {acercaList.map((acerca)=> (
                    <li key={acerca.id} className='max-w-37.5 wrap-break-word list-none mb-3'>
                        <a href={acerca.href}>
                        {acerca.text}
                        </a>
                    </li>
                ))}
            </div>

            <div className='px-20 md:px-0'>
                <h3>LEGAL</h3>
                {legalList.map((legal)=> (
                    <li key={legal.id} className='max-w-37.5 wrap-break-word list-none mb-3'>
                        <a href={legal.href}>
                        {legal.text}
                        </a>
                    </li>
                ))}
            </div>

            <div className="px-20 md:px-0 md:flex-start">
                <h3 className="font-semibold mb-4">SÍGUENOS</h3>
                <div className="flex gap-6">
                    {footerIcons.map((icon) => (
                    <li key={icon.id} className="list-none">
                        <a href={icon.href}>
                        <i className={`${icon.icon} text-lg transition-transform hover:scale-110 transform inline-block duration-300 hover:text-gray-600`}></i>
                        </a>
                    </li>
                    ))}
                </div>
            </div>
        </div>
        <div className=' text-lg px-8 py-4 w-full text-center flex justify-between'>
            <p >Aranco</p>
            <p className='md:flex-wrap'>Copyright © 2026 Aranco. Todos los derechos reservados.</p>
        </div>
    </div>
  )
}

export default Footer
