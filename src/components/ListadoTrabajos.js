import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajos = ({limite = 10}) => {
  return (
      <section className='works'>

        {
            //utilizamos returno por ser una funcioón de callback
            trabajos.slice(0,limite).map(trabajo => {
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
  )
}
