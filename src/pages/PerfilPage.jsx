import { ImgPerfil } from "../components/ImgPerfil";

export const PerfilPage = () => {
  return (
    <>
      <div className='flex pb-12'>
        <div className='w-1/2 p-10'>
          <ImgPerfil />
        </div>
        <div className='w-1/2 p-20'>
          <p className='text-white text-font-1 text-2xl'>
            Estudiante de Ingeniería en Sistemas y Computación en la Universidad
            de Caldas en Manizales, Caldas. Participante de MisiónTic 2022 con
            la misma U de Caldas. Cuento con habilidades y conocimientos en
            Java. Python, Angular y JavaScript. También cuento con habilidades
            blandas para comunicación, lidezgo y trabajo en equipo.
          </p>
        </div>
      </div>
    </>
  );
};
