import React from 'react';
import elisa from '../../images/person.svg';
import iconPhone from '../../images/icon-phone.svg';
import iconMail from '../../images/icon_mail.svg';
import iconInstagram from '../../images/icon-instagram.svg';
import iconTwitter from '../../images/icon-twitter.svg';
import './hero_styles.css';

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
          <div className='hero--content_social'>
            <img src={iconPhone} alt='icon phone' />
            <img src={iconMail} alt='icon mail' />
            <img src={iconInstagram} alt='icon instagram' />
            <img src={iconTwitter} alt='icon twitter' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
