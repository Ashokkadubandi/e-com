import {Switch,Route} from 'react-router-dom'
import Home from "./components/Home";
import Products from './components/Products'
import Cart from './components/Cart'
import Header from './components/Header';
import './App.css'



function App(){
  return (
    <>
    <Header/>
    <div className='body-sec'>
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
      </Switch>
    </div>
    </>
    
  )
}

export default App