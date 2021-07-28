import React, { useEffect, useState } from 'react'
import { mapImage } from '../../utils/mapImage'
import './button_styles.css'

const Button = ({ title, type, withIcon, icon, form }) => {
  const [buttonForm, setButtonForm] = useState('');

  useEffect(() => {
    if (form) setButtonForm('buttonForm')
  }, [buttonForm, form]);

  return (
    <>
      <button className={`button ${type} ${buttonForm}`} >
        {withIcon ? <img src={mapImage(icon)} alt='icon' /> : null}
        {title}
      </button>
    </>
  )
}

export default Button;
