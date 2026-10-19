import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const products = [
        { id: 1, name: 'Wireless Mouse', price: 8500 },
        { id: 2, name: 'USB-C Hub', price: 12000 },
        { id: 3, name: 'Laptop Stand', price: 15500 },
];

    const {id} = useParams();
    console.log(id)
    console.log(typeof(id))

    const product = products.find((p)=> p.id === Number(id))

    if(!product){
        return <h2>Product not found</h2>
    }
  return (
    <div>
        <h1>Product Details</h1>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    </div>
  )
}

export default ProductDetails