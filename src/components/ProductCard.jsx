import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "../store/CartSlicer"
import { toast } from 'react-toastify';

function ProductCard({ data }) {
    const dispatch = useDispatch();
    const handleAddToCart = () => {
        dispatch(addToCart(data))
        toast.success("Added to cart");
    }
    return (
        <div className="p-2 border rounded border-cyan-600 flex flex-col justify-center items-center w-full">
            <img src={data.thumbnail} alt="" />


            <Link to={`/product/${data.id}`}
                className="text-left w-full text-lg text-cyan-600 hover:underline hover:text-cyan-700">
                {data.title}
            </Link>

            <div className="flex justify-between w-full">
                <p className="font-semibold text-xl">$ {data.price}</p>
                <p className="text-green-700">{data.discountPercentage}% off</p>
            </div>

            <div className="w-full text-left">
                <p className="bg-gray-300 w-fit rounded-2xl px-1">{data.rating}<span className="text-yellow-500">★</span></p>
            </div>

            <button className="bg-cyan-600 hover:bg-cyan-700 cursor-pointer p-1 px-2 rounded-xl text-white w-full mt-2" onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export default ProductCard