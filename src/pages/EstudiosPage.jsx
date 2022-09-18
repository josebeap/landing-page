import { MyCard } from "../components/MyCard";
import { estudios } from "../database/estudios";

export const EstudiosPage = () => {
  return (
    <>
      <h1 className='text-center text-white text-lg'>Estudios</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
        {estudios.map((estudios) => (
          <MyCard
            key={estudios.id}
            url={estudios.url}
            titulo={estudios.titulo}
            descripcion={estudios.descripcion}
            url_preview={estudios.url_preview}
            url_github={estudios.url_github}
          />
        ))}
      </div>
    </>
  );
};
