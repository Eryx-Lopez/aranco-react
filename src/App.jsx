import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Referencias from "./Components/Referencias/Referencias";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import Contacto from "./Components/Contacto/Contacto";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/referencias" element={<Referencias categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada} />} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
      <Footer setCategoriaSeleccionada={setCategoriaSeleccionada} />
    </>


  );
}

export default App
