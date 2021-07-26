import React from 'react';
import logo from '../../images/logo.svg';
import Button from '../Button/Button';
import './header_styles.css';

const Header = () => {
  return (
    <>
      <header className='header--container'>
        <div className='header--wrapper_img'>
          <img src={logo} alt='logo' className='img' />
        </div>
        <div className='header--wrapper_lore'>
          <Button title='currículum' type='primary' />
          {/* <button className='button'>currículum</button> */}
        </div>
      </header>
    </>
  )
}

export default Header;
