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
        <div className={classes.logo}>
          <img src = {logo}></img>
        </div>

        <div className={classes.Account}>
          <div> LOGIN </div>
          <div> JOIN </div>
          <HeaderCart className={classes.HeaderCart} onOpen ={props.onOpen}/>
        </div>

      </header>
    
    </>

  )
}

export default Header