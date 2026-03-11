import React from 'react'
import { useState } from 'react'
import karma_skz1 from '../../Assets/Cobija_1.jpg'
import jungkook1 from '../../Assets/Cobija_2.jpg'
import monlaferte1 from '../../Assets/Cobija_3.jpg'
import onepiece1 from '../../Assets/Cobija_4.jpg'
import karma_felix1 from '../../Assets/Cobija_5.jpg'
import humbe1 from '../../Assets/Cobija_6.jpg'

const categoriasList = [
    { id: 1, text: 'K-pop', key: 'kpop' },
    { id: 2, text: 'Anime', key:'anime' },
    { id: 3, text: 'Música', key: 'musica' },
    { id: 4, text: 'Personalizadas', key: 'personalizadas' },
]

const productos ={
    kpop: [
      { id: 1, nombre: 'KARMA Stray Kids', precio: '$300', img: karma_skz1 },
      { id: 2, nombre: 'KARMA Felix (Stray Kids)', precio: '$300', img: karma_felix1 },
      { id: 3, nombre: 'Jungkook (BTS)', precio: '$300', img: jungkook1 },
    ],
    anime: [
      { id: 1, nombre: 'One Piece', precio: '$300', img: onepiece1 },
      { id: 2, nombre: 'Goku (Dragon Ball)', precio: '$300', img: onepiece1 },
      { id: 3, nombre: 'Naruto', precio: '$300', img: onepiece1 },
    ],
    musica: [
      { id: 1, nombre: 'Humbe', precio: '$300', img: humbe1 },
      { id: 2, nombre: 'Mon Laferte', precio: '$300', img: monlaferte1 },
      { id: 3, nombre: 'Bad Bunny', precio: '$300', img: humbe1 },
    ],
    personalizadas: [
      { id: 1, nombre: 'Humbe', precio: '$300', img: humbe1 },
      { id: 2, nombre: 'Mon Laferte', precio: '$300', img: monlaferte1 },
      { id: 3, nombre: 'Bad Bunny', precio: '$300', img: karma_felix1 },
    ],
    
}

const Catalogo = () => {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('kpop');

  return (
    <div className='max-w-2xl md:max-w-3xl mx-auto m-26 mb-20 flex flex-col gap-4 scroll-mt-22' id='catalogo'>
      <h2 className='text-4xl font-bold mb-6 text-center'>Catálogo</h2>
      {/* Categorias */}
      <div className='flex justify-center gap-8'>
        {categoriasList.map((categoria)=> (
          <div 
          key={categoria.id} 
          onClick={() => setCategoriaSeleccionada(categoria.key)}
          className={`w-28 h-28 bg-black rounded-full flex items-center justify-center 
            hover:bg-red-950 transition-colors duration-200 cursor-pointer
            ${categoriaSeleccionada == categoria.key ? 'ring-4 ring-red-900' : ''}`}
          >
            <span className="text-white text-lg font-bold">{categoria.text}</span>
          </div>
        ))}
      </div>

        {/* Renderizado de los productos */}
      {categoriaSeleccionada && (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
          {productos[categoriaSeleccionada].map((producto) =>
            <div 
              key={producto.id} 
              className='relative bg-gray-200 rounded-lg overflow-hidden shadow-lg'
              style={{
                backgroundImage: `url(${producto.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px'
              }}
            >
              <div className='absolute bottom-0 w-full bg-black text-white p-4 bg-opacity-'>
                <h3 className='text-lg font-bold'>{producto.nombre}</h3>
                <p>{producto.precio}</p>
              </div>
            </div>
          )}
        </div>
      )}
      
    </div>
  );
};

export default Catalogo
