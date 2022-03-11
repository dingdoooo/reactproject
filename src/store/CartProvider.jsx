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

    // 2. Add를 1개씩 여러번 추가했을 때, cart에 각각 listing되지 않고, 중복된 수량으로 통합 연산되도록 하려면??

    // 이미 동일한 id 값의 book이 cart에 존재할 경우, 해당 book의 amount만 추가한다.
    // item :Add할때 올려보낸,, id와 현재 cart에 들어있는 id를 비교하기 위함
    const existingCartItemIndex = cartState.items.findIndex(
      (cartItem) => cartItem.id === item.id
    )

    // Add를 통해 등록한 책이 cart에 존재한다면, existingCartIemIndex에 입력되어있다.
    const existingCartItem = cartState.items[existingCartItemIndex]
    console.log('존재하는 cart item : ', existingCartItem);


    // Add를 통해 새로 등록한 book(item)이 cart에 이미 존재할 때 (true) 
    let updatedItems;

    if (existingCartItem) {

      // updatedItem : 객체{}
      const updatedItem = {
        ...existingCartItem,
        // existingCartItem.amount : 기존 장바구니에 있던 amount에 Add 클릭해서 장바구니로 올린 item.amount를 더해준다.
        amount: existingCartItem.amount + item.amount,
      };

      updatedItems = [...cartState.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // Add를 통해 새로 등록한 book(item)이 cart에 존재하지 않을 때
      updatedItems = cartState.items.concat(item)
    }

    const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;

    setCartState({ items: updatedItems, totalAmount: updatedTotalAmount })

  };

  const cartContext = {
    items: cartState.items, // 7line) cartState에 있는 item 값을 담아줌
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
  }



  return (
    <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider