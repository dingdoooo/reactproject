// custrom component : 사용자 정의 컴포넌트는 항상 '대문자'로 시작한다!
import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button 
      className={classes.button}
      type = {props.type || 'button'}
      onClick = {props.onClick}
      >
        {props.children}
      </button>
  )
}

export default Button