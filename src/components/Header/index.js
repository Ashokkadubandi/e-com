import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    console.log('router')

    return (
        <header>
            <h1>A</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/cart'>Cart</Link>
            </nav>
        </header>
    )
}



export default Header