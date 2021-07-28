import React from 'react'
import Button from '../Button'
import './form_styles.css'

const Form = () => {
  return (
    <>
      <div className='form--container'>
        <h5>HABLEMOS</h5>
        <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en ponerse en contacto conmigo.</p>
        <form>
          <div className='form--control'>
            <label className='form--label'>Nombre completo</label>
            <input className='form--input' type='text' placeholder='Juan' required />
          </div>
          <div className='form--control'>
            <label className='form--label'>Correo electrónico</label>
            <input className='form--input' type='text' placeholder='Juan@gmail.com' required />
          </div>
          <div className='form--control'>
            <label className='form--label'>Mensaje</label>
            <textarea className='form--textarea' name="textarea" rows="5" cols="10"></textarea>
          </div>
          <Button title='Enviar Mensaje' type='primary' form={true} />
        </form>
      </div>
    </>
  )
}

export default Form;
