import {useEffect} from 'react'

const Home = () => {

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
            <h1>Hello welocome to E-commerce application</h1>
        </>
    )
}

export default Home