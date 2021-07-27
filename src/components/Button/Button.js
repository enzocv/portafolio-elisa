import React from 'react'
import { mapImage } from '../../utils/mapImage'
import './button_styles.css'

const Button = ({ title, type, withIcon, icon }) => {
  return (
    <>
      <button className={`button ${type}`} >
        {withIcon ? <img src={mapImage(icon)} alt='icon' /> : null}
        {title}
      </button>
    </>
  )
}

export default Button
