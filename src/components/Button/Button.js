import React from 'react'
import './button_styles.css'

const Button = ({ title, type }) => {
  return (
    <>
      <button className={`button ${type}`} >{title}</button>
    </>
  )
}

export default Button
