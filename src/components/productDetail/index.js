import { useEffect } from "react"


const ProductDetail = (props) => {
    const {match} = props
    const {params} = match
    const {id} = params
    
    useEffect(() => {
        fetch(`https://fakestoreapi.in/api/products/${id}`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
    },[id])

    return (
        <h1>Product Detailed view</h1>
    )
}

export default ProductDetail