import {useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import EasyHome from '../../Cotext/cart';
import Spinner from 'react-bootstrap/Spinner';
import './index.css'

const products = [{category:'audio',name:'Audio'},
    {category:'gaming',name:'Gaming'},
    {category:'mobile',name:'Mobile'},
    {category:'tv',name:'TV'},
    {category:'laptop',name:'Laptop'},
    {category:'appliances',name:'Appliances'}

]

const apiStatus = {
    pending:'PEN',
    success:'SUC',
    failure:'FAIL',
}
let tempData = []

const Products = () => {

    const [apiRun, setApirun] = useState(apiStatus.pending)
    const [categoryData,setCategoryData] = useState([])
    const [activateCategory,setCategory] = useState('All')

    useEffect(() => {
        fetch('https://fakestoreapi.in/api/products?limit=150')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            // console.log(res.products)
            tempData = res.products
            setApirun(apiStatus.success)
            setCategoryData(res.products)
        })
    },[])

    const changeCategory = (id) => {
        setCategory(id)
        const filteredData = tempData.filter(each => each.category === id)
        if(filteredData.length === 0){
            setCategoryData(tempData)
        }else{
            setCategoryData(filteredData)
        }

    }

    const renderLoader = () => (
        <Spinner animation="border" variant="primary" />
        
    )

    const renderData = () => (
        <EasyHome.Consumer>
            {value => {
                const {cartUpdating,cartList} = value

                const updateCartSection = (data) => {
                    let isAdd = cartList.filter(each => each.id === data.id)
                    console.log(isAdd.length,'yes or no',typeof isAdd)
                    if(isAdd.length === 0){
                        cartUpdating(data)
                    }
                }

                return (
                    <ul className='pro-lists'>
                        {categoryData.map(each =>{
                            const {price,discount,id} = each
                            const actualPrice = price + (price * (discount / 100) )
                        return (
                                <li key={each.id} className='product-card-list'>
                                    <Link className='product-link-adjust' to={`/product/${id}`}>
                                        <img className='image-product' src={each.image} alt={each.id}/>
                                    </Link>
                                <div className='text-section-product'>
                                    <h3>{each.brand}<span>{each.model}</span></h3>
                                    <p className='title'>{each.title}</p>
                                    <div className='price-sec'>
                                        <span className='price'>{actualPrice}</span>
                                        <h1>{price}$<span>{discount}% off</span></h1>
                                        {/* <h2>{actualPrice}</h2>
                                        <h1>{each.price}</h1>
                                        <h3>{discount}%off</h3> */}
                                    </div>
                                    <div className='add-cart-buy'>
                                            <button className='add-cart' onClick={() => updateCartSection(each)}>Add to cart</button>
                                            <button className='buy-now'>Buy now</button>
                                        </div>
                                </div>
                            </li>
                            
                        )})}
                    </ul>
                )
            }}
        </EasyHome.Consumer>
    )

    const renderFailure = () => <p>Data rendering Fail</p>

    const renderOnApiStatus = () => {
        switch (apiRun) {
            case 'PEN':
                return renderLoader();
                
            case 'SUC':
                return renderData();
                
            case 'FAIL':
                return renderFailure();
                
            default:
                return null
        }
    }

    return (
        <div className='product-section'>
            <div className='filter-cart-section'>
                <div className='card-span'>
                    {/* cart icon and no of carts */}
                    <FaShoppingCart className='cart-logo'/>
                    <span>
                        <EasyHome.Consumer>
                            {value => {
                                const {cartList} = value
                                return (
                                    <div className='cart-count'>
                                        <span>{cartList.length}</span>
                                    </div>
                                )
                            }}
                        </EasyHome.Consumer>
                    </span>

                </div>
                <div className='filters-section'>
                    <select onChange={(e) => changeCategory(e.target.value)} value={activateCategory}>
                        <option>All</option>
                        {products.map(each => (
                            <option key={each.category} value={each.category}>{each.name}</option>
                        ))}
                    </select>
                </div>

            </div>
            <h1>{activateCategory.toLocaleUpperCase()}</h1>
            <div className='product-display-section'>
                {renderOnApiStatus()}
            </div>
        </div>
    )
}

export default Products