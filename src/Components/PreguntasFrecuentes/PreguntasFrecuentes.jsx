import React from 'react'
import { useState } from 'react'

const faqs = [
  { id: 1, 
    pregunta: "¿Lorem ipsum dolor sit amet consectetur?",
    respuesta: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  { id: 2, 
    pregunta: "¿Lorem ipsum dolor sit amet consectetur?",
    respuesta: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  { id: 3, 
    pregunta: "¿Lorem ipsum dolor sit amet consectetur?",
    respuesta: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  { id: 4, 
    pregunta: "¿Lorem ipsum dolor sit amet consectetur?",
    respuesta: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
  { id: 5, 
    pregunta: "¿Lorem ipsum dolor sit amet consectetur?",
    respuesta: "Lorem ipsum dolor sit amet consectetur adipiscing elit."
  },
]

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex (openIndex === index ? null : index);
  };

  return (
    <div className='max-w-2xl md:max-w-3xl mx-auto m-26 mb-20 flex flex-col gap-4 scroll-mt-22' id='faqs'>
      <h2 className='text-4xl font-bold mb-12 text-center'>Preguntas Frecuentes</h2>
      {faqs.map((faq, index) => (
        <div key={index} className=' bg-black text-white rounded-xl border-b py-6 px-8 md:py-4 hover:bg-red-950 cursor-pointer transition-colors duration-200'>
          <button className='  cursor-pointer w-full text-left flex justify-between items-center focus:outline-none  hover:text-white'
            onClick={() => toggleFAQ(index)}
          >
            <span className='text-xl font-bold'>{faq.pregunta}</span>
            <span className='text-xl'>{openIndex === index ? '-' : '+'}</span>
          </button>
          {openIndex === index && (
            <p className='mt-2 '>{faq.respuesta}</p>
          )}
        </div>
      ))}
      
      <p className='text-center mt-8 text-lg'>¿No encontraste lo que buscabas? <a href="https://wa.me/5213318454168?text=Me%20gustaría%20saber%20más%20sobre%20las%20frazadas" className='text-red-900 hover:underline'>Contáctanos</a></p>
      
    </div>
  );
};

export default PreguntasFrecuentes
