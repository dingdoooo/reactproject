import React from 'react'
import classes from './Banner.module.css'

const Banner = () => {
  return (
    <div className={classes.bannerbox}>
      <ul className={classes.banner_menu}>메뉴</ul>
      <ul className={classes.banner_coupon}>e쿠폰</ul>
      <ul className={classes.banner_gift}>상품권 × 선물</ul>
      <ul className={classes.banner_event}>이벤트 × 제휴</ul>
      <ul className={classes.banner_store}>매장검색</ul>
    </div>
  )
}

export default Banner