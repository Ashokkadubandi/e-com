import {Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import './index.css'

const Header = () => {
    console.log('router')

    return (
        <header>
            <div className='logo-con-ea'>
            <FaShopify/>
            <h1>EH</h1>
            </div>
            <nav>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/products'>Products</Link>
                <Link className='links' to='/cart'>Cart</Link>
            </nav>
        </header>
    )
}



export default Header