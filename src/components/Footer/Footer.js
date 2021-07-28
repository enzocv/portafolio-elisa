import React from 'react'
import { mapImage } from '../../utils/mapImage'
import Social from '../Social'
import './footer_styles.css'

const Footer = () => {
  return (
    <>
      <div className='footer--container'>
        <div className='footer--logo'>
          <img src={mapImage('logo')} alt='logo' />
        </div>
        <div className='footer--lore'>
          <div className='footer--lore_copy'>
            <p>Hecho con </p>
            <img src={mapImage('iconHeard')} alt='heart' />
            <p>   de Elisa.</p>
          </div>
          <p>Copyright 2021 - Todos los derechos reservados.</p>
        </div>
        <div className='footer--social'>
          <Social />
        </div>
      </div>
    </>
  )
}

export default Footer
