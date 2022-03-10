import React, { useContext, useState } from 'react'
import CartContext from '../store/CartContext'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Button from '../Commons/Button'
import Modal from '../Commons/Modal'


const PREMIUMPIZZA = [
    {
        id: "pizza1",
        name: "마스터 트리플 코스",
        description:
            "#애피타이저-메인-디저트로 즐기는 피자",
        Lprice: 33900,
        Mprice: 28000,
    },
    {
        id: "pizza2",
        name: "치즈 퐁듀 파이어 미트",
        description:
            "#씨푸드 퐁듀 피자의 귀환",
        Lprice: 34900,
        Mprice: 29000,
    },
    {
        id: "pizza3",
        name: "블록버스터4",
        description:
            "#4개 도시의 프리미엄 요리를 품은 블록버스터급 콰트로 피자!",
        Lprice: 35900,
        Mprice: 29000,
    },
    {
        id: "pizza4",
        name: "블랙앵거스 스테이크",
        description:
            "#블랙앵거스 비프에 랍스터볼까지",
        Lprice: 34900,
        Mprice: 29000,
    },
]

const NEWPIZZA = [
    {
        id: "pizza1",
        name: "아메리칸 패티 멜트",
        description:
            "#그릴드 직화 패티+치즈 멜트의 운명적 맛남!",
        Lprice: 28900,
        Mprice: 22000,
    },
    {
        id: "pizza2",
        name: "아메리칸 패티 멜트+블랙앵거스 더블치즈엣지",
        description:
            "#패티 멜트와 스테이크의 육즙 가득한 만남!!",
        Lprice: 36900,
        Mprice: 28500,
    },
    {
        id: "pizza3",
        name: "아메리칸 패티 멜트+뉴욕 오리진 더블치즈엣지",
        description:
            "#아메리칸 패티 멜트와 미국 피자 오리진의 만남!",
        Lprice: 33900,
        Mprice: 25000,
    },
]


const Cart = (props) => {
    const cartContext = useContext(CartContext);

    const totalAmount = 1;


    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartContext.items.map((pizza) => (
                <CartItem
                    key={pizza.id}
                    name={pizza.name}
                    Lprice={pizza.Lprice}
                    Mprice={pizza.Mprice}
                    amount={pizza.amount}
                />
            ))}
        </ul>
    );


    const cartItemsTotal = (
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
    );

    const modalButton = (
        <>
            <div className={classes.buttons}>
                <Button onClick={props.onClose}>Close</Button>
                <Button>Order</Button>
            </div>
        </>
    );

    const cartModalContent = (
        <>
            { /* 장바구니 목록(cartItems) */}
            {cartItems}
            { /* 장바구니 목록 총 합(cartItemsTotal) */}
            {cartItemsTotal}
            { /* 취소, 주문 버튼(modalButton) */}
            {modalButton}
        </>
    );

    return (
        <Modal onClose={props.onClose}>{cartModalContent}</Modal>
    )
};




export default Cart