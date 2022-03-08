import React from 'react'

const Premium = () => {
  return (
  <>
    <div className = "premium">
    <figure className = "pizzablock">
        <img src="../images/pizza1.jpg" width="350" height="263"/>
        <figcaption>마스터 트리플 코스</figcaption>
        <br/>
        <div> L : 33,900원~  M : 28,000원~</div>
      </figure>

      <figure className = "pizzablock">
        <img src="./pizza3.jpg" width="350" height="263"/>
        <figcaption>치즈 퐁듀 파이어 미트</figcaption>
        <br/>
        <div> L : 34,900원~  M : 29,000원~</div>
      </figure>

      <figure className = "pizzablock">
        <img src="./pizza2.jpg" width="350" height="263"/>
        <figcaption>블록버스터4</figcaption>
        <br/>
        <div> L : 35,900원~  M : 29,000원~</div>
      </figure>
      </div>
    </>
  )
}

export default Premium