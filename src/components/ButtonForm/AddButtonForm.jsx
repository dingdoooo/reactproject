import React, { useRef, useState } from 'react'
import _uniqueId  from 'lodash/uniqueId'
import Button from '../Commons/Button'
import classes from './AddBookForm.module.css'
import Input from '../Commons/Input'

const AddButtonForm = (props) => {

  const [id] = useState(_uniqueId('prefix-'))

  const inputRef = useRef();
  // console.log(inputRef);

  const submitHandler = (event) => {
    event.preventDefault();

    const amountValue = inputRef.current.value;
    const amountValueToNumber = parseInt(amountValue);
    console.log(amountValueToNumber);

    {props.onAddToCart(amountValueToNumber,"Large")}

  }

  return (
    <form className={classes.form}>
    <Input ref={inputRef} input={ {id :id, type:'number', defaultValue : '1'} }/>
    <Button type="submit" onClick ={submitHandler}>Add</Button>
    </form>
  )
}

export default AddButtonForm