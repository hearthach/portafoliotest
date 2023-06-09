import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, esto es ejemplo de <strong>información</strong>,
        se realizara diversos <strong>ejemplos</strong> para todo tipo,
        seguiremos informando en breve.
      </h1>

      <h2 className='title'>
        Te ayudo a crear tu propio sitio o aplicaciones web, tener
        más visibilidad y relevancia en internet. <Link to="/contacto">Contáctanos.</Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos proyectos</h2>
        <p>Estos son algunos de los diversos trabajos</p>

        {/* se le coloca una props */}
        <ListadoTrabajos limite="3" />
      </section>

    </div>
  )
}
