import React, {useState} from 'react'
import CartContext from './CartContext'

const CartProvider = (props) => {


    const [cartState, setCartState] = useState({
        items: [],
        totalAmount: 0
    });


    // cart에 pizza 데이터를 추가
    const addItemToCartHandler = (item) => {
        console.log('addItemToCartHandler called!');
        console.log(item);

        const existingCartItemIndex = cartState.items.findIndex(
            (cartItem) => cartItem.id === item.id
        );

        const existingCartItem = cartState.items[existingCartItemIndex];
        console.log('존재하는 cart item : ' + existingCartItem);

        let updatedItems;
        if (existingCartItem) {  // 방금 새로 등록한 book(item)이 cart에 이미 존재할 때,
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + item.amount,
            };
            updatedItems = [...cartState.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else { // 방금 새로 등록한 book(item)이 cart에 존재하지 않을 때.
            updatedItems = cartState.items.concat(item);
        }

        console.log(updatedItems);

        const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;

        setCartState({ items: updatedItems, totalAmount: updatedTotalAmount });
    };

    // cartContext 구현
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
    }
    
    return <CartContext.Provider value={CartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider