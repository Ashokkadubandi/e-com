import {useEffect} from 'react'

const Cart = () => {

    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            console.log(res)
        })
    })

    return (
        <>
            <h1>Hello welocome to ECART-commerce application</h1>
        </>
    )
}

export default Cart