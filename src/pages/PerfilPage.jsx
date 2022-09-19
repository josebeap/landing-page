import React from "react";

export const PerfilPage = () => {
  return (
    <>
      <div className='flex pb-12'>
        <div className='w-1/2 p-10'>
          <h1 className='not-italic font-normal text-5xl text-white'>Hola,</h1>
          <h1 className='not-italic font-normal text-5xl text-white'>
            Mi nombre es{" "}
            <span className='not-italic font-normal text-5xl text-orange-400'>
              Jose Beltran
            </span>
          </h1>
          <span className='not-italic font-normal text-5xl text-orange-500'>
            Desarrollador Web
          </span>
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
