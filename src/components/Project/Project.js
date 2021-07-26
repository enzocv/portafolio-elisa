import React from 'react'
import Button from '../Button/Button'
import './project_styles.css'

import { mapImage } from '../../utils/mapImage'

const Project = ({ image, title, lore, linkCode, linkProject }) => {
  return (
    <>
      <div className='project--container'>
        <div className='project--content'>
          <img src={mapImage(image)} alt='project' className='project--content_img' />
          <div className='project--content_lore'>
            <h5>{title}</h5>
            <p>{lore}</p>
            <div className='project--actions'>
              <Button title='ver código' type='secondary' />
              <Button title='ver proyecto' type='primary' />
            </div>
          </div>
        </div>
        <div className='project--story'>
          <p>testimonio</p>
        </div>
      </div>
    </>
  )
}

export default Project
