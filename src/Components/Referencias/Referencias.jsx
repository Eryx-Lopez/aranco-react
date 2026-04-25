import React, { useState, useEffect} from 'react'
import { useNavigate} from 'react-router-dom'


import karma_skz1 from '../../Assets/Cobija_1.jpg'
import jungkook1 from '../../Assets/Cobija_2.jpg'
import monlaferte1 from '../../Assets/Cobija_3.jpg'
import onepiece1 from '../../Assets/Cobija_4.jpg'
import karma_felix1 from '../../Assets/Cobija_5.jpg'
import humbe1 from '../../Assets/Cobija_6.jpg'


const categoriasList = [
    { id: 1, text: 'K-pop', key: 'kpop' },
    { id: 2, text: 'Caricaturas', key:'caricaturas' },
    { id: 3, text: 'Pop', key: 'pop' },
    { id: 4, text: 'Series y películas', key: 'peliculas' },
    { id: 5, text: 'Personalizar', key: 'personalizadas' },
]

const productos ={
    kpop: [
      { id: 1, nombre: 'KARMA Stray Kids', precio: '$300', img: karma_skz1 },
      { id: 2, nombre: 'KARMA Felix (Stray Kids)', precio: '$300', img: karma_felix1 },
      { id: 3, nombre: 'Jungkook (BTS)', precio: '$300', img: jungkook1 },
    ],
    caricaturas: [
      { id: 1, nombre: 'One Piece', precio: '$300', img: onepiece1 },
      { id: 2, nombre: 'Goku (Dragon Ball)', precio: '$300', img: onepiece1 },
      { id: 3, nombre: 'Naruto', precio: '$300', img: onepiece1 },
    ],
    pop: [
      { id: 1, nombre: 'Humbe', precio: '$300', img: humbe1 },
      { id: 2, nombre: 'Mon Laferte', precio: '$300', img: monlaferte1 },
      { id: 3, nombre: 'Bad Bunny', precio: '$300', img: humbe1 },
    ],
    personalizadas: [
      { id: 1, nombre: 'Humbe', precio: '$300', img: humbe1 },
      { id: 2, nombre: 'Mon Laferte', precio: '$300', img: monlaferte1 },
      { id: 3, nombre: 'Bad Bunny', precio: '$300', img: karma_felix1 },
    ],
    peliculas: [
      { id: 1, nombre: 'Humbe', precio: '$300', img: humbe1 },
      { id: 2, nombre: 'Mon Laferte', precio: '$300', img: monlaferte1 },
      { id: 3, nombre: 'Bad Bunny', precio: '$300', img: karma_felix1 },
    ],
    
}

const Referencias = ({categoriaSeleccionada, setCategoriaSeleccionada}) => {
  const navigateToPersonalizadas = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCategoriaClick = (key) => {
    if (key === 'personalizadas') {
      navigateToPersonalizadas('/contacto');
    } else {
      setCategoriaSeleccionada(key);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1500); // 1.5 segundos
    }
  }

  return (
    <div className='max-w-2xl md:max-w-3xl mx-auto m-26 mb-20 flex flex-col scroll-mt-22 ' id='referencias'>
      <h2 className='text-4xl font-bold mb-6 text-center'>Referencias</h2>

      {/* Lista de Categorias */}
      <div className='grid justify-center gap-y-6 grid-cols-3 mt-4 mx-2 md:mx-0 lg:grid-cols-5 justify-items-center'>
        {categoriasList.map((categoria)=> (
          <div 
          key={categoria.id} 
          onClick={() => handleCategoriaClick(categoria.key)}
          className={`w-22 h-22 md:w-32 md:h-32  bg-black rounded-full flex items-center justify-center 
            hover:bg-red-800 transition-colors duration-200 cursor-pointer 
            ${categoriaSeleccionada == categoria.key ? 'bg-red-900' : ''}`}
          >
            <span className="text-white text-sm md:text-lg font-bold wrap-break-word text-center">{categoria.text}</span>
          </div>
        ))}
      </div>

        {/* Renderizado de los productos */}
      {categoriaSeleccionada && categoriaSeleccionada !== 'personalizadas' && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 med:gap-6 mt-8 mx-15 sm:mx-6 md:mx-4 ' >
          {/* Esqueleto de carga */}

          {loading ? 
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-300 rounded-lg aspect-9/16 w-full"></div>
          )) :
          productos[categoriaSeleccionada].map((producto) =>
            <div 
              key={producto.id} 
              className='relative bg-gray-200 rounded-lg overflow-hidden shadow-lg aspect-9/16 cursor-pointer transform transition-transform duration-300 hover:scale-105 '
              style={{
                backgroundImage: `url(${producto.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'

              }}
            >
              <div className='absolute bottom-0 w-full bg-black text-white p-4 bg-opacity-75'>
                <h3 className='text-lg font-bold m-0 '>{producto.nombre}</h3>
                <p>{producto.precio}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Referencias
