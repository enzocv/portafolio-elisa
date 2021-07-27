import React from 'react'
import { mapImage } from '../../utils/mapImage'
import './storyCard_styles.css'

const StoryCard = ({ storyImg, storyTitle, storyCaptio }) => {
  console.log(typeof (storyTitle));
  return (
    <>
      <div className='storyCard--wrapper'>
        <div className='storyCard--container'>
          <img src={mapImage(storyImg)} alt='user1' />
          <p className='storyCard--container_title'>{storyTitle}</p>
          <p className='storyCard--container_caption'>{storyCaptio}</p>
        </div>
      </div>
    </>
  )
}

export default StoryCard
