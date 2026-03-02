import React from 'react'
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

function HomeProducts() {
          const [products, setProducts] = useState([]);
            useEffect(() => {
            console.log("Home products mounted")
            fetch(`https://dummyjson.com/products`)
              .then (res => res.json())
              .then (data => setProducts (data.products))
            }, [])
  return (
    <>
      <div className="mb-12">
                  <h2 className="text-xl text-cyan-600 mb-3">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {
                products.map((product) => (
                 <ProductCard key={product.id} data={product}/>
                ))

            }
         </div>
      </div>
    </>
    
  )
}

export default HomeProducts 

