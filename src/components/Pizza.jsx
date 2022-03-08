import React from 'react'
import Premium from './Premium';
import Special from './Special';


const Pizza = () => {
  const { useState } = React;

  let [special, setspecial] = useState(false);
  let [premium, setpremium] = useState(false);

  const specialHandler = () => {
    setspecial(!special)
  }
  const premiumHandler = () => {
    setpremium(!premium)
  }


  return (
    <>
      <h1 className="pizza" onClick={specialHandler}> 🍕 스페셜 에디션 피자</h1>
      {special ? <Special /> : null}

      <br />

      <h1 className="pizza" onClick={premiumHandler}> 🍔 프리미엄 </h1>
      {premium ? <Premium /> : null}
    </>
  )
}

  export default Pizza