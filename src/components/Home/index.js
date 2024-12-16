//  import {useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const Home = () => {

    return (
        <div className='home-con'>
            <img src='https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-visualizing-e-commerce-in-benin-through-3d-rendering-for-social-media-image_3640688.jpg'
              alt="no"/>
            <div className='text-container'>
                <h1>Hello,</h1>
                <p>Easy home is tells you to buy products and more accessories, Let's find some more
                   stuff that relevant to your wants and get instant offers here let's shop...
                </p>
                <Link to='/products'>
                <button className='btn-prime'>Shop Now</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Home