import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>
      <h1>Contacto</h1>

      <form className='contact' action='mailto:mplandauro@gmail.com'>
        <input type='text' placeholder='Nombre' />
        <input type='text' placeholder='Apellidos' />
        <input type='email' placeholder='Email' />
        <textarea placeholder='Motivo de Contacto' />
        <input type='submit' value='Enviar' />
      </form>

    </div>
  )
}
