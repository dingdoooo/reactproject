import React from 'react'
import NewPizzaList from './NewPizzaList';
import PremiumPizzaList from './PremiumPizzaList';
import Banner from './Layout/Banner'


const Pizza = () => {

  return (
    <>
      <Banner />
      <NewPizzaList />
      <PremiumPizzaList />
    </>
  )
}

export default Pizza