import React, { useContext, useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Button from '../Commons/Button';
import CartContext from '../../store/CartContext';

const Cart = (props) => {

  const cartContext = useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartContext.items.map((pizza) => (
        <CartItem
          key={pizza.id}
          name={pizza.name}
          price={pizza.price.toLocaleString()}
          amount={pizza.amount}
          size={pizza.size}
        />
      ))}

    </ul>
  )

  const totalAmount = `${cartContext.totalAmount.toLocaleString()}`

  const cartItemsTotal = (
    <div className={classes.buttons}>
      <span>Total Amount : </span>
      <span>{totalAmount}</span>
    </div>
  )

  const modalButton = (
    <div className={classes.buttons}>
      <Button onClick={props.onClose}> Close </Button>
      <Button> Order </Button>
    </div>

  )

  const cartModalContent = (
    <div className={classes.content}>
      <div className={classes.list}>주문 목록</div>
      <hr />
      {cartItems}
      <div className={classes.total}>
        {cartItemsTotal}
        {modalButton}
      </div>
    </div>
  )

  return (
    <Modal onClose={props.onClose}>
      {cartModalContent}
    </Modal>
  )
}

export default Cart