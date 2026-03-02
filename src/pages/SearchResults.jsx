import { useEffect,useState } from "react"
import { data, useParams } from "react-router-dom"
import ProductCard from "../components/ProductCard"
function SearchResults() {
    const params = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/search?q=${params.query}`)
        .then(res =>res.json())
        .then(data =>setProducts(data.products));
    }, [params.query])   
  return (
   
    <section className="px-4 py-6 sm:px-40 sm:py-12">

        <h2 className="text-xl text-cyan-600 mb-1">Search Results </h2>

        <h3 className="text-md text-cyan-600 mb-3">{params.query}</h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
             {
             products.map((product) => (
                <ProductCard key={product.id} data={product} />
            ))
            }
            </div>

    </section> 
        
  )
}

export default SearchResults