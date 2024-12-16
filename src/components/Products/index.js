import {useEffect,useState} from 'react'
import { FaShoppingCart } from "react-icons/fa";
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

    const renderLoader = () => <p>Processing....</p>

    const renderData = () => {
        return (
            <ul className='pro-lists'>
                {categoryData.map(each => (
                    <li key={each.id} className='product-card-list'>
                        <p>{each.category}</p>
                    </li>
                ))}
            </ul>
        )
    }

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
                    <span>1</span>

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