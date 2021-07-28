import React from 'react'
import Button from '../Button/Button'
import StoryCard from '../StoryCard/StoryCard'
import './project_styles.css'

import { mapImage } from '../../utils/mapImage'

const Project = ({ image, title, lore, storyImg, storyTitle, storyCaption }) => {
  return (
    <>
      <div className='project--container'>
        <div className='project--content'>
          <img src={mapImage(image)} alt='project' className='project--content_img' />
          <div className='project--content_lore'>
            <h5>{title}</h5>
            <p>{lore}</p>
            <div className='project--actions'>
              <Button title='ver código' type='secondary withIcon' withIcon={true} icon='github' />
              <Button title='ver proyecto' type='primary' />
            </div>
          </div>
        </div>
        <StoryCard storyImg={storyImg} storyTitle={storyTitle} storyCaption={storyCaption} />
      </div>
    </>
  )
}

export default Project
