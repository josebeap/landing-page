import { ImgPersonal } from "../components/ImgPersonal";

export const InicioPage = () => {
  return (
    <>
      <div className='flex flex-wrap m-4'>
        <div className='w-1/2 p-10'>
          <h1 className='not-italic font-normal text-5xl text-white text-font-1'>
            Hola,
          </h1>
          <h1 className='not-italic font-normal text-5xl text-white text-font-2'>
            Mi nombre es{" "}
            <span className='not-italic font-normal text-5xl text-orange-500'>
              Jose Beltran
            </span>
          </h1>
          <span className='not-italic font-normal text-5xl text-orange-500 text-font-1'>
            Desarrollador Web
          </span>
        </div>
        <div className='w-1/2 p-4'>
          <ImgPersonal />
        </div>
      </div>
    </>
  );
};
