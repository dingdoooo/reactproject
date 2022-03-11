import React from 'react'
import classes from './CartItem.module.css'

/*
<CartItem
  key = {book.id}
  name={book.name}
  Lprice={book.Lprice}
  Mprice={book.Mprice}
  amount={book.amount}
  /> 을 props로 내려받는다.
*/

const CartItem = (props) => {


  return (
    <li className={classes['cart-item']}>
      <h2>{props.name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>{props.price}</span>
        <span className={classes.amount}> x {props.amount}</span>
      </div>

    </li>
  )
}

export default CartItem