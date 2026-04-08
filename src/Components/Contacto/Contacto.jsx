import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    foto: "",
    comentarios: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Validación simple
  const validate = () => {
    const newErrors = {};
    if (!formData.nombre.trim()) newErrors.nombre = "Por favor ingrese su nombre";
    if (!formData.apellido.trim()) newErrors.apellido = "Por favor ingrese su apellido";
    if (!formData.comentarios.trim()) newErrors.comentarios = "Por favor ingrese sus comentarios";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    emailjs
      .send(
        "service_jlxq4xi",     // reemplaza con tu Service ID
        "template_ahpou87",    // reemplaza con tu Template ID
        formData,
        "cR9VZq_6-5g7-vP3M"      // reemplaza con tu Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Mensaje enviado correctamente. En breve nos pondremos en contacto contigo.");
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Error al enviar el mensaje");
        }
      );

  };

  return (
    <div className="mt-20" id="contacto">
        <h2 className="text-4xl font-bold mb-6 text-center ">Contáctanos</h2>
        <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-3xl shadow-md scroll-mt-22 mb-12">
      
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nombre */}
                <div>
                <label className="block font-semibold">Nombre *</label>
                <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                />
                {errors.nombre && <p className="text-red-900 text-sm">{errors.nombre}</p>}
                </div>

                {/* Apellido */}
                <div>
                <label className="block font-semibold">Apellido *</label>
                <input
                    type="text"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                />
                {errors.apellido && <p className="text-red-900 text-sm">{errors.apellido}</p>}
                </div>

                {/* Dirección */}
                <div>
                <label className="block font-semibold">Dirección</label>
                <input
                    type="text"
                    name="direccion"
                    value={formData.direccion}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                />
                </div>

                {/* Foto a realizar */}
                <div>
                <label className="block font-semibold">Foto a realizar</label>
                <input
                    type="file"
                    name="foto"
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                />
                </div>

                {/* Comentarios */}
                <div>
                <label className="block font-semibold">Comentarios adicionales *</label>
                <textarea
                    name="comentarios"
                    value={formData.comentarios}
                    onChange={handleChange}
                    className="w-full border p-2 rounded-lg"
                />
                {errors.comentarios && <p className="text-red-900 text-sm">{errors.comentarios}</p>}
                </div>

                {/* Botón */}
                <button
                type="submit"
                className="w-full bg-red-900 text-white py-2 rounded-3xl hover:bg-red-800 transition-colors"
                >
                Enviar
                </button>
            </form>

            {status && <p className="mt-4 text-center font-semibold">{status}</p>}
        </div>
        <div className="max-w-xl mx-auto p-6 bg-gray-100 rounded-3xl shadow-md scroll-mt-22 mb-12">
            <h3 className="text-2xl font-bold mb-4 text-center">O contáctanos por WhatsApp</h3>
            <a
                href="https://wa.me/5213318454168?text=Me%20gustaría%20saber%20más%20sobre%20las%20frazadas"
                className="w-full bg-green-500 text-white py-2 rounded-3xl hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
            >
                <i className="bi bi-whatsapp text-xl"></i>
                Enviar mensaje por WhatsApp
            </a>
        </div>

    </div>
    
  );
};

export default Contacto;