import EasyHome from "../../Cotext/cart"
import './index.css'

const Cart = () => (
    <EasyHome.Consumer>
        {value => {
            const {cartList,removeData} = value
            console.log(cartList)


            const renderNoData = () => (
                <>
                <img src="https://img.freepik.com/premium-vector/no-data-concept-illustration_86047-488.jpg?semt=ais_hybrid" alt="no-data"/>
                <h1>No data Found</h1>
                </>
            )

            const renderCartData = () => (
                <ul className='pro-lists'>
                {cartList.map(each =>{
                    const {price,discount} = each
                    const actualPrice = price + (price * (discount / 100) )

                return (
                    <li key={each.id} className='product-card-list'>
                        <img src={each.image} alt={each.id}/>
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
                                <button className='buy-now'>Buy now</button>
                                <button onClick={() => removeData(each)} className="remove">Remove</button>
                            </div>
                            <p>qty: 1</p>
                        </div>
                    </li>
                )})}
            </ul>
            )

            return (
                <div className="cart-section">
                    {cartList.length > 0 ? renderCartData() : renderNoData()}
                </div>
            )
            
        }}
    </EasyHome.Consumer>
)

export default Cart