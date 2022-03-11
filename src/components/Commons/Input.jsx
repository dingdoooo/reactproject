import React from 'react'
import classes from './Input.module.css'

// 2. forwardRef 적용 후
const Input = React.forwardRef((props, ref) => {

  return (

    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  )
})


export default Input

// label의 htmlFor="" 과 input의 id=""가 동일해야한다.
// input 태그 - type="" id ={props.input.id} 를 다 사용하지 않고 {...props.input}으로 대체 
/*
<Input 
1) label={'Amount'} 
2) input={ {id :'amount', type:'number', defaultValue : '1'} }/> 으로 내려보냈기 때문에 

1. forwardRef 적용 전
const Input = (props) => {
  
  return (
  <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
      </div>
  )
}



*/ 