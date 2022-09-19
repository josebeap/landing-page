import React from "react";
import { useState } from "react";
import AlertError from "../components/AlertError";

export const ContactoPage = () => {
  const [nombres, setNombres] = useState("");
  const [correo, setCorreo] = useState("");
  const [celular, setCelular] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación Formulario
    if ([nombres, celular, correo, mensaje].includes("")) {
      setError(true);
      return;
    }

    setError(false);

    // Limpiar nuestro Formulario
    setNombres("");
    setCorreo("");
    setCelular("");
    setMensaje("");

    // Ejercico finalizado
    alert("Datos enviados");
  };

  // Modal de exito!
  const okModal = () => {
    Swal.fire({
      title: "Ejercicio Completado!",
      icon: "success",
      confirmButtonText: "Aceptar 😎",
    });
  };

  return (
    <>
      <div className='m-auto flex justify-center items-center'>
        <div className='md:w-1/2 lg:w-2/5 mx-5'>
          {/* Inicia el Formulario */}
          <h1 className='text-center text-white text-lg'>Contacto</h1>
          <form
            onSubmit={handleSubmit}
            className='bg-gray-100 shadow-md rounded-lg py-10 px-5 mb-10 '
          >
            <div className='mb-5'>
              <label
                htmlFor='nombres'
                className='block text-gray-700 uppercase font-bold'
              >
                Nombre Completo 😎
              </label>
              <input
                id='nombres'
                type='text'
                placeholder='Nombres'
                className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='nombres'
                className='block text-gray-700 uppercase font-bold'
              >
                Celular 📱
              </label>
              <input
                id='celular'
                type='number'
                placeholder='Celular'
                className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                value={celular}
                onChange={(e) => setCelular(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='nombres'
                className='block text-gray-700 uppercase font-bold'
              >
                Correo 📧
              </label>
              <input
                id='correo'
                type='email'
                placeholder='Correo'
                className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className='mb-5'>
              <label
                htmlFor='mensaje'
                className='block text-gray-700 uppercase font-bold'
              >
                Mensaje 💬
              </label>
              <textarea
                id='mensaje'
                type='textarea'
                className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400'
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
              />
            </div>

            <input
              type='submit'
              className='bg-orange-500 w-full p-3 text-white uppercase font-bold rounded-full hover:bg-orange-700 transition-colors cursor-pointer'
              value='Enviar'
            />
          </form>
        </div>

        <div className='md:w-1/2 lg:w-2/5 mx-5'>
          {error && (
            <AlertError>
              <p>Todos los campos son obligatorios</p>
            </AlertError>
          )}
        </div>
      </div>
    </>
  );
};
