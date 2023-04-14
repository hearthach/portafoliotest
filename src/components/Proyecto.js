import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    //usando desestruccturación
    const [proyecto, setProyecto] = useState({})

    //uso de use Params - hook
    const params = useParams();

    //uso el use-efect - funcion de callback
    useEffect(()=> {
        // eslint-disable-next-line
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        // console.log(proyecto);//para saber el filtro
        //asignamos el proyecto filtrado en array
        setProyecto(proyecto[0]);
    }, [params.id]);

  return (
    <div className='page page-work'>
        
        <div className='mask'>
            <img src={"/images/" + proyecto.id + ".png"} alt="" />
        </div>
        <h1 className='heading'>{proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.descripcion}</p>
        <a href={proyecto.url} target='_blank' rel="noreferrer">Ir al Proyecto</a>    
    </div>
  )
}
