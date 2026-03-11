import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Catalogo from "./Components/Catalogo/Catalogo";
import PreguntasFrecuentes from "./Components/PreguntasFrecuentes/PreguntasFrecuentes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/catalogo" element={<Catalogo/>} />
        <Route path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>} />
      </Routes>
      <Footer />
    </>


  );
}

export default App
