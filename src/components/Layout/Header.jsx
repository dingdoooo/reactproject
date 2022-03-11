import React from 'react'
import classes from './Header.module.css'
import HeaderCart from './HeaderCart'
import logo from '../../images/logo.png'

const Header = (props) => {
  // HeaderCart의 부모 = Header, Header의 부모 = App
  // props.onOpen = {openCartHandler}
  return (
    <>
      <header className={classes.header}> 
        <img src = {logo}></img>
        <HeaderCart className={classes.HeaderCart} onOpen ={props.onOpen}/>
      </header>
    
    </>

  )
}

export default Header