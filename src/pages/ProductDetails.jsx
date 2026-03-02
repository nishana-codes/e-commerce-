import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const formatDate = (isoString) => {
        return new Date(isoString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };
    return (
        <section className="px-4 py-6 sm:px-40 sm:py-12">
            {
                product &&
                <div className="mb-12">
                    <h2 className="text-md text-cyan-600 mb-3">Product detail &gt; {product.category} &gt; {product.brand}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div>
                            <img className="max-h-[70vh]" src={product.images[0]} alt="" />
                            <div className="flex">
                                {product.images.map((image, index) => (
                                    <img key={index} className="w-28" src={image} alt="" />
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col justify-center">
                            <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
                            <div className="flex gap-2 mb-2">
                                {
                                    product.tags.map((tag, index) => (
                                        <div key={index} className="bg-gray-300 rounded p-1 capitalize">{tag}</div>
                                    ))
                                }
                            </div>
                            <div className="mb-2">
                                {product.rating}<span className="text-yellow-500">★</span>
                            </div>
                            <hr className="mb-4" />
                            <div className="flex gap-3 items-center mb-4">
                                <div>
                                    <span className="text-green-700 text-xl">-{product.discountPercentage}%</span>
                                </div>
                                <div>
                                    <span className="text-2xl font-bold" ><span className="text-lg">$</span>{product.price}</span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <table className="w-52">
                                    <tbody>

                                        <tr>
                                            <td className="font-semibold">Category:</td>
                                            <td>{product.category}</td>
                                        </tr>
                                        <tr>
                                            <td className="font-semibold">Brand:</td>
                                            <td>{product.brand}</td>
                                        </tr>
                                        {
                                            Object.entries(product.dimensions).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td className="font-semibold capitalize">{key}:</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="mb-4">
                                <h3 className="font-semibold">About this product</h3>
                                <p>{product.description}</p>
                            </div>
                            <div className="flex justify-evenly">
                                <div className="flex flex-col items-center">
                                    <svg className="w-12 h-12 text-cyan-600 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4" />
                                    </svg>

                                    <p className="text-cyan-600">{product.returnPolicy}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 1 0 0 4h16a2 2 0 1 0 0-4H4Zm0 6h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm10.707 5.707a1 1 0 0 0-1.414-1.414l-.293.293V12a1 1 0 1 0-2 0v2.586l-.293-.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l2-2Z" clipRule="evenodd" />
                                    </svg>
                                    <p className="text-cyan-600">{product.availabilityStatus}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3v4a1 1 0 0 1-1 1H5m4 6 2 2 4-4m4-8v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7.914a1 1 0 0 1 .293-.707l3.914-3.914A1 1 0 0 1 9.914 3H18a1 1 0 0 1 1 1Z" />
                                    </svg>
                                    <p className="text-cyan-600">{product.warrantyInformation}</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    <svg className="w-12 h-12 text-cyan-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8.032 12 1.984 1.984 4.96-4.96m4.55 5.272.893-.893a1.984 1.984 0 0 0 0-2.806l-.893-.893a1.984 1.984 0 0 1-.581-1.403V7.04a1.984 1.984 0 0 0-1.984-1.984h-1.262a1.983 1.983 0 0 1-1.403-.581l-.893-.893a1.984 1.984 0 0 0-2.806 0l-.893.893a1.984 1.984 0 0 1-1.403.581H7.04A1.984 1.984 0 0 0 5.055 7.04v1.262c0 .527-.209 1.031-.581 1.403l-.893.893a1.984 1.984 0 0 0 0 2.806l.893.893c.372.372.581.876.581 1.403v1.262a1.984 1.984 0 0 0 1.984 1.984h1.262c.527 0 1.031.209 1.403.581l.893.893a1.984 1.984 0 0 0 2.806 0l.893-.893a1.985 1.985 0 0 1 1.403-.581h1.262a1.984 1.984 0 0 0 1.984-1.984V15.7c0-.527.209-1.031.581-1.403Z" />
                                    </svg>

                                    <p className="text-cyan-600">{product.shippingInformation}</p>
                                </div>

                                

                            </div>
                            
                        </div>
                    </div>
                    <hr />
                    <div className="pt-4 sm:p-28">
                        <h2 className="text-lg text-cyan-600 mb-3">Reviews</h2>
                        {product.reviews.map((review, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex gap-2">
                                    <svg className="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 20a7.966 7.966 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.966 7.966 0 0 1 12 20ZM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12Zm10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7Z" clipRule="evenodd" />
                                    </svg>
                                    <h5>{review.reviewerName}</h5>
                                </div>
                                <div className="p-1">
                                    <p className="text-sm text-gray-500">Rating : <span className="text-gray-500">{review.rating}<span className="text-yellow-500">★</span></span></p>
                                    <p className="text-sm text-gray-400">Reviewed on {formatDate(review.date)}</p>
                                    <p>{review.comment}</p>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            }

        </section>
    )
}

export default ProductDetail