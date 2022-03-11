import './App.css';
import React, {useEffect, useState} from 'react';
import Pizza from './components/Pizza';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';


const App = () => {
  let [pizza,setpizza] = useState(false);

  const [CartIsShown, setCartIsShown] = useState(false);
  const [LoginIsShown, LoginsetCartIsShown] = useState(false);

  const openCartHandler = () => {
    setCartIsShown(true);
    LoginsetCartIsShown(true);
  }
  
  const closeCartHandler = () => {
    setCartIsShown(false)
    LoginsetCartIsShown(false)
  }


  return(
    <CartProvider>
      {CartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen = {openCartHandler}/>
        <Pizza/>
      <Footer/> 
    </CartProvider>
      )
    }

export default App;
