import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCart.module.css'

const HeaderCart = (props) => {
  // <button class="button"><button/> 과 동일함
  return (
    <>
      <button className={classes.button} onClick ={props.onOpen}>
        <span className={classes.icon}><CartIcon/></span>
      </button>
    </>
  )
}

export default HeaderCart