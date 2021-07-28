import React from 'react'
import { mapImage } from '../../utils/mapImage'
import './social_styles.css'

const Social = () => {
  return (
    <>
      <div className='hero--content_social'>
        <img src={mapImage('iconPhone')} alt='icon phone' />
        <img src={mapImage('iconMail')} alt='icon mail' />
        <img src={mapImage('iconInstagram')} alt='icon instagram' />
        <img src={mapImage('iconTwitter')} alt='icon twitter' />
      </div>
    </>
  )
}

export default Social
