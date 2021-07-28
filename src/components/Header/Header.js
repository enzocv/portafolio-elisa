import React from 'react';
import { mapImage } from '../../utils/mapImage';
import Button from '../Button/Button';
import './header_styles.css';

const Header = () => {
  return (
    <>
      <header className='header--container'>
        <div className='header--wrapper_img'>
          <img src={mapImage('logo')} alt='logo' className='img' />
        </div>
        <div className='header--wrapper_lore'>
          <Button title='currículum' type='primary' />
        </div>
      </header>
    </>
  )
}

export default Header;
