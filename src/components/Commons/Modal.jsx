import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'
import React from 'react'

// 포탈 : https://ko.reactjs.org/docs/portals.html
// ReactDOM.createPortal(child, container)

const Background = (props) => {
  return(
    // onClick = Background가 클릭됐을 때, props.onClose ={closeCartHandler} 가 실행된다.
    <div className={classes.background} onClick={props.onClose}/>
  )
}

const ModalWindow = (props) => {
  return(
    <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
  )
}
// 현재까지 만든 모든 컴포넌트 들이 'root'에 들어갔지만, Modal창은 index.html의 <div id="modal-window"></div> 로 들어가게 된다.
const portalElement = document.getElementById('modal-window');

const   Modal = (props) => {
  //  장바구니를 클릭했을 때, Background 컴포넌트와 ModalWindow 컴포넌트 둘 다 보여야 하므로 ReactDOM.createPortal()을 통해 불러온다.
  return (
    <>
    {ReactDOM.createPortal(<Background onClose={props.onClose}/>, portalElement)}
    {ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement) }
    </>

  )
}

export default Modal



