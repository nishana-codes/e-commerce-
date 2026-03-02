import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard";
    function CategoryProducts() {
      const { slug } = useParams();
      const [products, setProducts] = useState([]);
      useEffect(() =>{
        fetch(`https://dummyjson.com/products/category/${slug}`)
          .then(res => res.json())
          .then(data => setProducts(data.products)); 
      }, [slug])
    
        return (
          <section className="px-4 py-6 sm:px-40 sm:py-12">
            <div className="mb-12">
            <h2 className="text-xl text-cyan-600 mb-3">Products - {slug}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {
                products.map((product) => (
                  <ProductCard data={product} key={product.id} />
                ))
              }  
                </div>
                </div>
          </section>
          
        )
}

export default CategoryProducts