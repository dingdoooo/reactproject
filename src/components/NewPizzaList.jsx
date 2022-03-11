import React, { useState } from 'react'
import Card from './Card'
import NEW from './NEW'
import classes from './NewPizzaList.module.css'

const NEWPIZZA = [
  {
    id: "newpizza1",
    name: "아메리칸 패티 멜트",
    description:
      "#그릴드 직화 패티+치즈 멜트의 운명적 맛남!",
    Lprice: 28900,
    Mprice: 22000,
    src: require("../images/newpizza1.jpg")

  },
  {
    id: "newpizza2",
    name: "아메리칸 패티 멜트+블랙앵거스 더블치즈엣지",
    description:
      "#패티 멜트와 스테이크의 육즙 가득한 만남!!",
    Lprice: 36900,
    Mprice: 28500,
    src: require("../images/newpizza2.jpg")
  },
  {
    id: "newpizza3",
    name: "아메리칸 패티 멜트+뉴욕 오리진 더블치즈엣지",
    description:
      "#아메리칸 패티 멜트와 미국 피자 오리진의 만남!",
    Lprice: 33900,
    Mprice: 25000,
    src: require("../images/newpizza3.jpg")
  },
]


const NewPizzaList = () => {

  const [newPizza, setNewPizza] = useState(NEWPIZZA);

  const newPizzaList = newPizza.map((pizza) =>
    <NEW
      key={pizza.id}
      id={pizza.id}
      name={pizza.name}
      description={pizza.description}
      Lprice={pizza.Lprice}
      Mprice={pizza.Mprice}
      src={pizza.src}
    />
  )

  return (
    <section className={classes.pizza}>
      <Card >
        <ul className={classes.card}>{newPizzaList}</ul>
      </Card>
    </section>
  )

}


export default NewPizzaList