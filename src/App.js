import './App.css';
import React, {useEffect, useState} from 'react';
import Pizza from './components/Pizza';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  let [pizza,setpizza] = useState(false);

  return(
    <>
    <Header/>
      <Pizza />
    <Footer/> 
    </>
      )
    }

 
  



export default App;
