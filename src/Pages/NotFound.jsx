import React from 'react'
import { Link } from "react-router-dom";
import './NotFound.css'
export const NotFound = () => {
 
  return (<>
    <div className='container text-center'>
      <img className='mx-auto img-notfound d-block' src='/src/assets/img/NotFound.png'/>
      <Link
              to='/'
              className='link'
              >
              Volver al Inicio
            </Link>
    </div>
    
    </>
  )
}
