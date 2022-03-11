import React, { useContext } from 'react'
import AddButtonForm from './ButtonForm/AddButtonForm'
import AddButtonForm2 from './ButtonForm/AddButtonForm2'
import classes from './NEW.module.css'
import CartContext from '../store/CartContext'

const NEW = (props) => {

  const cartContext = useContext(CartContext);

  const addItemToCartHandler = (amount, size) => {

    const pizza = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.Lprice,
      description: props.description,
      size: size
    }
    cartContext.addItem(pizza);

  }

  const addItemToCartHandler2 = (amount2, size) => {

    const pizza2 = {
      id: props.id,
      name: props.name,
      amount: amount2,
      price: props.Mprice,
      description: props.description,
      size: size
    }

    cartContext.addItem(pizza2);

  }

  return (
    <li className={classes.new}>


      <div className={classes.pizza__img}>
        <img src={props.src} />
      </div>

      <div className={classes.All}>
        <div className={classes.pizza__name}>
          {props.name}
        </div>

        <div className={classes.pizza__description}>
          <div className={classes.description}>{props.description}</div>
        </div>

        <div className={classes.pizza__price}>

          <div className={classes.pizza__large} > 🍕 Large : {props.Lprice.toLocaleString()} ~
          </div>

          <AddButtonForm onAddToCart={addItemToCartHandler} />
        </div>

        <div className={classes.pizza__price}>
          <div className={classes.pizza__medium}> 🌭 Medium : {props.Mprice.toLocaleString()} ~
          </div>
          <AddButtonForm2 onAddToCart={addItemToCartHandler2} />
        </div>
      </div>
    </li>

  )
}

export default NEW