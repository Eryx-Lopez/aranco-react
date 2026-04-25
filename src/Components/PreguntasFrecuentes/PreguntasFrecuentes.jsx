import React from 'react'
import { useState } from 'react'
import MapaTienda from '../MapaGoogle/MapaTienda';

const faqs = [
  { id: 1, 
    pregunta: "¿Tienen tienda física?",
    respuesta: <MapaTienda />
  },
  { id: 2, 
    pregunta: "¿Qué tipo de tela es?",
    respuesta: "Es tela polar hecha de 100% poliéster, haciéndola suave, cálida y con colores vibrantes perfectos para tus fotos."
  },
  { id: 3, 
    pregunta: "¿De qué tamaños pueden ser?",
    respuesta: "El tamaño estandar es de 1.10 m x 2 m, pero también se pueden hacer más pequeñas o más largas con un ancho máximo de 1.10 m"
  },
  { id: 4, 
    pregunta: "¿Hacen entregas?",
    respuesta: "Manejamos entregas en toda la Zona Metropolitana de Guadalajara. Para otras zonas, por favor contáctanos para coordinar el envío, el cual sería con costo adicional."
  },
  { id: 5, 
    pregunta: "¿Qué imagenes pueden ponerse en la frazada?",
    respuesta: "Se puede poner cualquier imagen que se desee."
  },
]

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex (openIndex === index ? null : index);
  };

  return (
    <div className='w-80 md:w-3xl mx-auto m-26 mb-20 flex flex-col gap-4 scroll-mt-22' id='faqs'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className=' bg-black text-white rounded-xl border-b py-6 px-8 md:py-4 hover:bg-red-950 cursor-pointer transition-colors duration-200'>
          <button className='  cursor-pointer w-full text-left flex justify-between items-center focus:outline-none  hover:text-white'
            onClick={() => toggleFAQ(index)}
          >
            <span className='text-base md:text-xl font-bold'>{faq.pregunta}</span>
            <span className='text-xl'>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className='mt-2 text-base md:'>{faq.respuesta}</p>
          )}
        </div>
      ))}
      
      <p className='text-center mt-8 text-lg'>¿No encontraste lo que buscabas? <a href="/contacto" className='text-red-900 hover:text-black
       underline underline-offset-4'>Contáctanos</a></p>
      
    </div>
  );
};

export default PreguntasFrecuentes
