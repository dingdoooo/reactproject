import React from 'react'
import classes from './ListBox.module.css';

const ListBox = () => {
  return (
    <div className={classes.listbox}>
      <div className={classes.warning}>※ 유의사항 ※</div>
      <div className={classes.content}>
        <ul>
          <li>단종으로 인한 상품권 사용 안내 : 동일 가격 또는 더 높은 가격의 제품으로 대체 주문 가능<br />
            (상품권에 명시된 제품보다 더 높은 가격대의 제품 주문 시, 금액 추가 발생)<br />
            (단, 상품권에 명시된 제품보다 저렴한 제품 주문 시 발생하는 차액에 대해서는 환불 처리 불가)</li>
          <li>일부 리조트 및 특수매장은 상기 가격과 차이가 있음</li>
          <li>모든 사진은 이미지 컷이므로 실제 제품과 다를 수 있습니다.</li>
        </ul>
      </div>
    </div>
  )
}

export default ListBox