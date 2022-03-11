import React from 'react'
import classes from './CartItem.module.css'

/*
<CartItem
  key={pizza.id}
  name={pizza.name}
  price={pizza.price}
  amount={pizza.amount}
  size ={pizza.size}
/> 을 props로 내려받는다.
*/

const CartItem = (props) => {


  return (
    <li className={classes['cart-item']}>
      <h2>{props.name}</h2>
      <div className={classes.summary}>
        <span className={classes.size}> {props.size}  </span>
        <span className={classes.amount}> x {props.amount}</span>
        <span className={classes.price}>{props.price}</span>
      </div>

    </li>
  )
}

export default CartItem