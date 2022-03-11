import './App.css';
import React, {useEffect, useState} from 'react';
import Pizza from './components/Pizza';
import Header from './components/Layout/Header'
import Footer from './components/Footer';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';


const App = () => {
  let [pizza,setpizza] = useState(false);

  const [CartIsShown, setCartIsShown] = useState(false);

  const openCartHandler = () => {
    console.log("openCartHandler called!!");
    setCartIsShown(true);
  }
  
  const closeCartHandler = () => {
    setCartIsShown(false)
  }

  return(
    <CartProvider>
      {/* CartIsShown = true이면,  */}
      {CartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen = {openCartHandler}/>

        <Pizza/>
      <Footer/> 
    </CartProvider>
      )
    }

 
  



export default App;
