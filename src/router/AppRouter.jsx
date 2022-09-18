import { Routes, Route } from "react-router-dom";
import { ContactoPage } from "../pages/ContactoPage";
import { EstudiosPage } from "../pages/EstudiosPage";
import { ExperienciaPage } from "../pages/ExperienciaPage";
import { InicioPage } from "../pages/InicioPage";
import { PerfilPage } from "../pages/PerfilPage";
import { PortafolioPage } from "../pages/PortafolioPage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <div className='py-20'>
        <Routes>
          <Route path='/inicio' element={<InicioPage />} />
          <Route path='/perfil' element={<PerfilPage />} />
          <Route path='/estudios' element={<EstudiosPage />} />
          <Route path='/experiencia' element={<ExperienciaPage />} />
          <Route path='/portafolio' element={<PortafolioPage />} />
          <Route path='/contacto' element={<ContactoPage />} />

          <Route path='/*' element={<InicioPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
