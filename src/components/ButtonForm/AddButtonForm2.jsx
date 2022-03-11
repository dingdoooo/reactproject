import React, { useRef, useState } from 'react'
import _uniqueId from 'lodash/uniqueId'
import Button2 from '../Commons/Button2'
import classes from './AddPizzaForm2.module.css'
import Input from '../Commons/Input'

const AddButtonForm2 = (props) => {

  const [id] = useState(_uniqueId('prefix-'))

  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const amountValue2 = inputRef.current.value;
    const amountValueToNumber2 = parseInt(amountValue2);

    { props.onAddToCart(amountValueToNumber2, 'Medium') }

  }

  return (
    <form className={classes.form}>
      <Input ref={inputRef} input={{ id: id, type: 'number', defaultValue: '1' }} />
      <Button2 size={'Medium'} type="submit" onClick={submitHandler}>Add</Button2>
    </form>
  )
}

export default AddButtonForm2