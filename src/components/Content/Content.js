import React from 'react'
import './content_styles.css'
import iconArrow from '../../images/arrow-down.svg'
const Content = () => {
  return (
    <>
      <div className='content--container'>
        <p>A lo largo de mi carrera como Frontend, he tenido el privilegio de trabajar en proyectos retadores e increíbles</p>
        <p>Aquí hay algunos que me gustaría compartir.</p>
        <img src={iconArrow} alt='icon arrow down' />
      </div>
    </>
  )
}

export default Content;
