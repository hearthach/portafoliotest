import React from 'react'
// import { Link } from 'react-router-dom';
import { ListadoTrabajos } from './ListadoTrabajos';

export const Portafolio = () => {
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      <ListadoTrabajos />

      {/*
        <section className='works'>

          {
              //utilizamos returno por ser una funcioón de callback
              trabajos.map(trabajo => {
                //console para mostrar trabajo
                //console.log(trabajo);
                return (
                  <article key={trabajo.id} className='work-item'>
                    <div className='mask'>
                      <img src={"/images/" + trabajo.id + ".png"} alt="" />
                    </div>
                    <span>{trabajo.categorias}</span>
                    <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
                    <h3>{trabajo.tecnologias}</h3>
                  </article>    
                );            
              })
          }

        </section>
      */}

      </div>
  )
}
