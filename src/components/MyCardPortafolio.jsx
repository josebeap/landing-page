export const MyCardPortafolio = ({
  url,
  titulo,
  descripcion,
  url_preview,
  url_github,
}) => {
  return (
    <div className='m-6 px-5 py-5 max-w-sm bg-black rounded-2xl'>
      <img
        src={url}
        className='rounded-2xl mx-auto mb-4 shadow-2xl object-cover'
      />
      <h1 className='font-bold text-2xl mb-4 text-white'>{titulo}</h1>
      <h1 className='mb-6 text-gray-400'>{descripcion}</h1>
      <a
        href={url_preview}
        target='_blank'
        className='bg-orange-500 mr-4 text-white px-6 py-2 rounded-full'
      >
        Vista Previa
      </a>
      <a
        href={url_github}
        target='_blank'
        className='bg-orange-500 mr-0 text-white px-6 py-2 rounded-full'
      >
        GitHub
      </a>
    </div>
  );
};
