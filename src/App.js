import { useState } from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from "./components/Home";
import Products from './components/Products'
import Cart from './components/Cart'
import Header from './components/Header';
import EasyHome from './Cotext/cart';
import './App.css'



function App(){

  const [cartList,updateCartList] = useState([])

  const cartUpdating = (data) => {
     updateCartList(pre => [...cartList,data])
  }

  const removeData = data => {
    const filteredData = cartList.filter(each => each.id !== data.id)
    updateCartList(filteredData)
  }
  
  return (
    <EasyHome.Provider 
    value={{cartList,cartUpdating,removeData}}
    >
    <Header/>
    <div className='body-sec'>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </div>
    </EasyHome.Provider>
    
  )
}

export default App