import { MyCardPortafolio } from "../components/MyCardPortafolio";
import { proyectos } from "../database/proyectos";

export const PortafolioPage = () => {
  return (
    <>
      <h1 className='text-center text-white text-lg'>Portafolio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {proyectos.map((proyecto) => (
          <MyCardPortafolio
            key={proyecto.id}
            url={proyecto.url}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            url_preview={proyecto.url_preview}
            url_github={proyecto.url_github}
          />
        ))}
      </div>
    </>
  );
};
