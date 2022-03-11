import React, { useContext, useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem';
import Button from '../Commons/Button';
import CartContext from '../../store/CartContext';

// {CartIsShown && <Cart onClose={closeCartHandler}/>} 이므로 onClose를 props로 내려받는다.
const Cart = (props) => {

  // cartContext에 있는 context들을 사용하겠다!(구독자??)
  const cartContext = useContext(CartContext);
  console.log(cartContext);

  const cartItems = (
    // classes.cart-items가 불가능해서 classes['cart-items']로 작성
    <ul className={classes['cart-items']}>
      {/* cartContext에 있는 items은 사용자가 추가한 피자들일것! */}
      {cartContext.items.map((pizza) => (
        <CartItem
          key = {pizza.id}
          name={pizza.name}
          price={pizza.price}
          amount={pizza.amount}
          size ={pizza.size}
        />
      ))}

    </ul>
  )

  const totalAmount = `${cartContext.totalAmount.toFixed(0)}`

  const cartItemsTotal = (
    <div className={classes.buttons}>
      <span>Total Amount : </span>
      <span>{totalAmount}</span>
    </div>
  )

  const modalButton = (
    <div className={classes.buttons}>
      <Button onClick ={props.onClose}> Close </Button>
      <Button> Order </Button>
    </div>

  )

  const cartModalContent = (
    <div className={classes.content}>
    <div className={classes.list}>주문 목록</div>
      <hr/>
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