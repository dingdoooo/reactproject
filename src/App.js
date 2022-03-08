import './App.css';
import React, {useEffect, useState} from 'react';
import Pizza from './components/Pizza';

const App = () => {
  let [count,setcount] = useState(0);
  let [pizza,setpizza] = useState(false);

  const clickHandler = () => {
    setcount(++count);
    setpizza(!pizza)
  }

  //test

  return(
    <>
      <Button count={count} onCligit config --global core.autocrlf trueck={clickHandler} />
      {pizza? <Pizza /> : null}
      <Pizza/>
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
