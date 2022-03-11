import React, { useState } from 'react'
import CartContext from './CartContext';

const CartProvider = (props) => {

  const [cartState, setCartState] = useState({
    items: [],
    totalAmount: 0
  });

  const addItemToCartHandler = (item) => {
    const updatedItem = [
      ...cartState.items,
      item
    ];

    setCartState({ items: updatedItem });

    const existingCartItemIndex = cartState.items.findIndex(
      (cartItem) => cartItem.id === item.id && cartItem.price === item.price
    )

    const existingCartItem = cartState.items[existingCartItemIndex]


    let updatedItems;

    if (existingCartItem) {

      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + item.amount,
      };

      updatedItems = [...cartState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = cartState.items.concat(item)
    }

    const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;

    setCartState({ items: updatedItems, totalAmount: updatedTotalAmount })

  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider