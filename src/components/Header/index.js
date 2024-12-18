import {Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './index.css'

const Header = () => {
    console.log('router')

    return (
        <>
            <header className='large-header'>
            <div className='logo-con-ea'>
            <FaShopify/>
            <h1>EH</h1>
            </div>
            <nav className='large-device'>
                <Link className='links' to='/'>Home</Link>
                <Link className='links' to='/products'>Products</Link>
                <Link className='links' to='/cart'>Cart</Link>
            </nav>
            <div className='small-device'>
                <button className='hamburger'>
                    <GiHamburgerMenu/>
                </button>
                <nav>
                    <Link className='links' to='/'>Home</Link>
                    <Link className='links' to='/products'>Products</Link>
                    <Link className='links' to='/cart'>Cart</Link>
                </nav>
            </div>
        </header>

        {/* <header className='sm-header'>
            <div className='logo-con-ea'>
                <FaShopify/>
                <h1>EH</h1>
            </div>
        </header> */}
        
        </>
    )
}



export default Header