import React from 'react'
import resena1 from '../../Assets/Resenas/resena1.png'
import resena2 from '../../Assets/Resenas/resena2.png'
import resena3 from '../../Assets/Resenas/resena3.png'
import resena4 from '../../Assets/Resenas/resena4.png'
import resena5 from '../../Assets/Resenas/resena5.png'
import resena6 from '../../Assets/Resenas/resena6.png'

import videoHiatus from '../../Assets/videohiatus.mp4'
import bannerInicio from '../../Assets/BannerInicio.png'
import bannerInicioMovil from '../../Assets/bannerInicioMovil.png'

const resenias = [
  { id: 1, nombre:"Miguel G.", img: resena1, resenia: "La tela estaba super suavecita", estrellas:4},
  { id: 2, nombre:"Kathy Q.", img: resena2, resenia: "Me encantó el nivel de detalle de la foto", estrellas:5 },
  { id: 3, nombre:"Jorge M.", img: resena3, resenia: "La atención fue bastante linda y me sentí acompañado todo el tiempo", estrellas:5 },
  { id: 4, nombre:"Michel M.", img: resena4, resenia: "La persona que entrega las frazadas es muy amable", estrellas:5 },
  { id: 5, nombre:"Julieta B.", img: resena5, resenia: "Precios baratos y buena calidad", estrellas:5 },
  { id: 6, nombre:"Janice F.", img: resena6, resenia: "Me ayudaron a hacer el collage de mi frazada y quedó justo como quería", estrellas:5 },

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
          <p className='text-xl text-black'>
            Como muchas mujeres en méxico, soy <span className='font-bold text-red-900' >una mamá soltera que decidió empnder para poder darle 
            un mejor futuro a su hijo </span> y seguir adelante. Apasionada por el diseño y las manualidades,
            descubrí el mundo de las piezas personalizadas y decidí crear mi propia marca de frazadas
            para que <span className='font-bold text-red-900' >las personas puedan siempre tener un pedacito de sus recuerdos siempre con ellos. </span>
            <br/><br/>
            Este proyecto no sólo nació para sostener a mi familia, sino también para <span className='font-bold text-red-900' >poder conectar 
            con la gente y poder compartir momentos especiales </span> que sean inmortalizados a través de mis
            frazadas, ya que cada una de ellas está hecha con dedicación y cuidado, prestando atención
            al más mínimo detalle para asegurar la satisfracción y felicidad de mis clientes.
          </p>
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
                Tu navegador no soporta el video.

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
                  <p className='text-yellow-500'>
                    {"★".repeat(resenia.estrellas)}
                  </p>
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