import './App.css';
import React, {useEffect, useState} from 'react';
import Pizza from './components/Pizza';
import Special from './components/Special';

const App = () => {
  let [count,setcount] = useState(0);
  let [pizza,setpizza] = useState(false);

  const clickHandler = () => {
    setcount(++count);
    setpizza(!pizza)
  }


  return(
    <>
      <Button count={count} onClick={clickHandler} />
      {pizza? <Pizza /> : null}
      <Pizza/>

      <Pizza/>
      <Special/>
    </>
      )
    }

    const Button = (props) => {
      // props = {count:0 , onClick:clickHandler}
      return(
        <>
          <button onClick ={props.onClick}>🍔</button>
          <span > clicked : {props.count}</span>
        </>
      )
  


}

export default App;
