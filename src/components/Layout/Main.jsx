import React from 'react'

const Main = (props) => {
  return (
    /* ✨Q1. props.children? 
    > App.js에서 <Main> <Books/> <Main/> 형식으로 사용할 예정,
    Main의 자식이 Books가 된다.*/
    <main>{props.children}</main>
  )
}

export default Main