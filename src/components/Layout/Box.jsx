import React from 'react'
import classes from './Box.module.css';

const Box = (props) => {
  return (
    <>
      <div className={classes.list_box}>
        <p className={classes.list_text}>제품의 영양성분 및 알레르기 유발성분을 먼저 확인하세요.</p>
        <button className={classes.button} onClick={props.onOpen}>
          <span>영양성분 및 알레르기 유발성분</span>
        </button>
      </div>
    </>
  )
}

export default Box