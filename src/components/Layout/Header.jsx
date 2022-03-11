import React, { useState, useEffect } from 'react'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'
import logo from '../../images/logo.png'
import './HeaderNav.css'

const Header = (props) => {

  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <>
      <div className={`header_nav ${show && "headernav__blue"}`}>

        <header className={classes.header}>
          <div className={classes.logo}>
            <img src={logo}></img>
          </div>

          <div className={classes.Account}>
            <div> LOGIN </div>
            <div> JOIN </div>
            <HeaderCart className={classes.HeaderCart} onOpen={props.onOpen} />
          </div>
        </header>
      </div>

    </>

  )
}

export default Header