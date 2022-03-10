import React from 'react'
import classes from './NEW.module.css'

const NEW = (props) => {
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
          <div className={classes.pizza__large}> 🍕Large : {props.Lprice}~</div>
          <div className={classes.pizza__medium}> 🌭Medium : {props.Mprice}~</div>
        </div>
      </div>
    </li>

  )
}

export default NEW