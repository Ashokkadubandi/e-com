import { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import './index.css'

const Header = (props) => {
    console.log(props)
    const [navAnimate,setNavAnimate] = useState(false)

    const animate = navAnimate ? 'nav-shown' : ''
    const hamAnim = navAnimate ?  'ham-anim' : ''


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
                <button className={`hamburger ${hamAnim}`} onClick={() => setNavAnimate(pre => !pre)}>
                    {navAnimate ? <IoMdClose/> : <GiHamburgerMenu/>}
                </button>
                <nav className={`${animate}`}>
                    <Link className='links' to='/' 
                    onClick={() => setNavAnimate(false)}>Home</Link>
                    <Link className='links' to='/products' 
                    onClick={() => setNavAnimate(false)}>Products</Link>
                    <Link className='links' to='/cart' 
                    onClick={() => setNavAnimate(false)}>Cart</Link>
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