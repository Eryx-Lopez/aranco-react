import React from 'react'
import historiaImg from '../../Assets/4a5.png'
import resenia1 from '../../Assets/mockup1.png'
import resenia2 from '../../Assets/mockup2.png'
import resenia3 from '../../Assets/mockup3.png'

import videoHiatus from '../../Assets/videohiatus.mp4'
import bannerInicio from '../../Assets/BannerInicio.png'
import bannerInicioMovil from '../../Assets/bannerInicioMovil.png'

const resenias = [
  { id: 1, nombre:"Cliente 1", img: resenia1, resenia: "Lorem ipsum dolor sit amet consectetur" },
  { id: 2, nombre:"Cliente 2", img: resenia1, resenia: "Lorem ipsum dolor sit amet consectetur" },
  { id: 3, nombre:"Cliente 3", img: resenia3, resenia: "Lorem ipsum dolor sit amet consectetur" },
  { id: 4, nombre:"Cliente 4", img: resenia3, resenia: "Lorem ipsum dolor sit amet consectetur" },
]

const Hero = () => {
    {/* Función para cambiar el banner según tamaño en pantalla */}


  return (
    <div className='mt-13.5'>
        {/* Sección banner promocional */}
      <section>
        <img src={bannerInicio} alt='BannerInicio' className='max-w-full scroll-mt-22 hidden md:block' id='inicio'/>
        <img src={bannerInicioMovil} alt='BannerInicio' className='max-w-full scroll-mt-22 block md:hidden' id='inicio'/>
      </section>
      {/* Sección historia */}
      <section className='flex flex-col lg:flex-row justify-between space-x-0 space-y-10 lg:px-60 lg:space-x-20 lg:space-y-0 items-center px-10 py-10 border-y-2 border-black scroll-mt-22' id='historia'> 
        <div className='text-center max-w-170'>
          <h2 className='text-4xl font-black text-black mb-4'>Nuestra Historia</h2>
          <p className='text-xl text-black'>Lorem ipsum dolor sit amet consectetur adipiscing elit proin, cubilia vel sociis 
          magnis dictumst pellentesque eleifend dis porttitor, sodales lacus turpis non 
          porta maecenas sapien. Ut in quis maecenas luctus a faucibus senectus curabitur 
          fames lacinia dictum, laoreet phasellus ad erat sodales etiam commodo ornare velit 
          condimentum, pharetra suscipit tincidunt quisque suspendisse risus consequat porta 
          tellus bibendum.</p>
        </div>
        <div>
          {/*<img src={historiaImg} alt="historia img" className='w-60 max-w-75 rounded-[20px] lg:mt-0 '/>*/}
          <video
            src={videoHiatus}
                className="w-60 max-w-75 rounded-[20px] lg:mt-0"
                type="video/mp4"
                controls
                preload="none"
              >
                Tu navegador no soporta video.

          </video>
        </div>
        
      </section>

      <section className='mx-auto px-6 sm:px-10 lg:px-20 py-10 scroll-mt-22' id='resenias'>
        <h2 className='text-4xl font-black mb-4 flex justify-center'>Reseñas</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'> 
          {resenias.map((resenia)=>(
            <div key={resenia.id}>
              <div>
                <div>
                  <img src={resenia.img} alt='Reseña' className='w-50 sm:w-48 lg:w-56 xl:w-72 rounded-md mx-auto'/>
                </div>
                <div className='px-1 my-4'>
                  <p className='font-bold text-xl'>{resenia.nombre}</p>
                  <p className='w-40 sm:w-48 lg:w-56 xl:w-72 wrap-break-word text-lg'>{resenia.resenia}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </section>
    </div>
  )
}

export default Hero