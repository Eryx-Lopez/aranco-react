import React from 'react'
import historiaImg from '../../Assets/4a5.png'
import resenia1 from '../../Assets/mockup1.png'
import resenia2 from '../../Assets/mockup2.png'
import resenia3 from '../../Assets/mockup3.png'

import bannerInicio from '../../Assets/BannerInicio.png'

const resenias = [
  { 
        id: 1,
        nombre:"Cliente 1",
        img:resenia1,
        resenia: "Lorem ipsum dolor sit amet consectetur"
    },
    { 
        id: 2,
        nombre:"Cliente 2",
        img: resenia1,
        resenia: "Lorem ipsum dolor sit amet consectetur"
    },
    { 
        id: 3,
        nombre:"Cliente 3",
        img: resenia3,
        resenia: "Lorem ipsum dolor sit amet consectetur"
    },
]
const Hero = () => {
  return (
    <div className='mt-13.5'>
      <section>
        <img src={bannerInicio} alt='BannerInicio' className='max-w-full'/>
      </section>
      <section className='flex justify-between space-x-20 items-center mx-60 my-10'> 
        <div className='text-center'>
          <h2 className='text-3xl font-black mb-4'>Nuestra Historia</h2>
          <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipiscing elit proin, cubilia vel sociis 
          magnis dictumst pellentesque eleifend dis porttitor, sodales lacus turpis non 
          porta maecenas sapien. Ut in quis maecenas luctus a faucibus senectus curabitur 
          fames lacinia dictum, laoreet phasellus ad erat sodales etiam commodo ornare velit 
          condimentum, pharetra suscipit tincidunt quisque suspendisse risus consequat porta 
          tellus bibendum.</p>
        </div>
        <div>
          <img src={historiaImg} alt="historia img" className='max-w-75'/>
        </div>
        
      </section>

      <section className='mx-60 my-4'>
        <h2 className='text-3xl font-black mb-4'>Reseñas</h2>
        <div className='flex gap-16 justify-center'> 
          {resenias.map((resenia)=>(
            <div key={resenia.id}>
              <div>
                <div>
                  <img src={resenia.img} alt='Reseña' className='max-w-50'/>
                </div>
                <div className='px-1 my-4'>
                  <p className='font-bold'>{resenia.nombre}</p>
                  <p className='max-w-45 wrap-break-word'>{resenia.resenia}</p>
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