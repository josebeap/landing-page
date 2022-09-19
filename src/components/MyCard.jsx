export const MyCard = ({ url, titulo, descripcion, url_preview }) => {
  return (
    <div className='m-6 px-5 py-5 max-w-sm bg-white border border-gray-200 shadow-md dark:bg-black dark:border-gray-700 rounded-2xl'>
      <a className='rounded-2xl' href='#'>
        <img src={url} />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {titulo}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {descripcion}
        </p>
        <a
          href={url_preview}
          target='_blank'
          className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-500 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:bg-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:bg-orange-800'
        >
          Read more
          <svg
            aria-hidden='true'
            className='ml-2 -mr-1 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            {/*<path
              fill-rule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clip-rule='evenodd'
  ></path>*/}
          </svg>
        </a>
      </div>
    </div>
  );
};
