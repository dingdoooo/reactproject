import React, { useEffect, useState } from 'react'
import Card from './Card'
import Premium from './Premium'
import classes from './PremiumPizzaList.module.css'

const PREMIUMPIZZA = [
  {
    id: "premiumpizza1",
    name: "마스터 트리플 코스",
    description:
      "#애피타이저-메인-디저트로 즐기는 피자",
    Lprice: 33900,
    Mprice: 28000,
    src: require("../images/premiumpizza1.jpg")

  },
  {
    id: "premiumpizza2",
    name: "치즈 퐁듀 파이어 미트",
    description:
      "#씨푸드 퐁듀 피자의 귀환",
    Lprice: 34900,
    Mprice: 29000,
    src: require("../images/premiumpizza2.jpg")
  },
  {
    id: "premiumpizza3",
    name: "블록버스터4",
    description:
      "#4개 도시의 프리미엄 요리를 품은 블록버스터급 콰트로 피자!",
    Lprice: 35900,
    Mprice: 29000,
    src: require("../images/premiumpizza3.jpg")
  },
  {
    id: "premiumpizza4",
    name: "블랙앵거스 스테이크",
    description:
      "#블랙앵거스 비프에 랍스터볼까지",
    Lprice: 34900,
    Mprice: 29000,
    src: require("../images/premiumpizza4.jpg")
  },
]

const PremiumPizzaList = () => {

  const [premiumPizza, setPremiumPizza] = useState(PREMIUMPIZZA);
  // console.log(premiumPizza);

  const premiumPizzaList = premiumPizza.map((pizza) =>
    <Premium
      key = {pizza.id}
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
        <ul className={classes.card}>{premiumPizzaList}</ul>
      </Card>
    </section>
  )

}


export default PremiumPizzaList

/* firebase를 이용하여 data를 가져오기까지는 ok, img 가져오기는 너무 힘들거같아서 따로 변경하지 않을것임
 
  useEffect(() => {
    const fetchPremiumPizza = async() => {
      const response = await fetch('https://reactpractice-a2d21-default-rtdb.firebaseio.com/PREMIUMPIZZA.json')
      console.log(response.ok); // true : data를 url에서 잘 받아왔다
 
      const responseData = await response.json();
      console.log(responseData);
 
      const pizzaData = [];
 
      for (const key in responseData){
        pizzaData.push({
          id : key,
          name : responseData[key].name,
          description : responseData[key].description,
          Lprice : responseData[key].Lprice,
          Mprice : responseData[key].Mprice,
        })
      }
      console.log(pizzaData);
      setPremiumPizza(pizzaData);
 
    }
    fetchPremiumPizza().catch(error => console.log(error));
    
  },[]);
*/