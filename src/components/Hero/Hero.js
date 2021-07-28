import React from 'react';
import elisa from '../../images/person.svg';
import './hero_styles.css';
import Social from '../Social';

const Hero = () => {
  return (
    <>
      <div className='hero--container'>
        <div className='hero--wrapper'>
          <img src={elisa} alt='elisa' className='hero--wrapper_img' />
        </div>
        <div className='hero--content'>
          <div className='hero--content_lore'>
            <h3>¡Hola a todos!</h3>
            <h2>Soy Elisa</h2>
            <p>Una Frontend Developer que le encanta implementar diseños que inspiran y atraen a las personas.</p>
          </div>
          <Social />
        </div>
      </div>
    </>
  )
}

export default Hero;
