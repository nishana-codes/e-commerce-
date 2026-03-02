import { useSelector, useDispatch } from "react-redux"
import { selectCartItems, selectCartTotalPrice, removeFromCart, updateQuantity, clearCart } from "../store/cartSlice"
import { toast } from "react-toastify";


function CartDrawer({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const cartTotalPrice = useSelector(selectCartTotalPrice)
    const handelRemoveFromCart = (item)=>{
        dispatch(removeFromCart({ id: item.id }))
        toast.info("Removed from cart")
    }
    if (!isOpen) return null
    return (
        <>
            <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose} />
            <div className="fixed inset-0 right-0 max-w-md w-full bg-white z-50 flex flex-col h-full border-l shadow-xl transform transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between p-4 border-b">
                    <h2 className="text-xl font-bold text-gray-800">Shopping Cart</h2>
                    <button className="hover:text-red-800" onClick={onClose}>X</button>
                </div>

                <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
                    {
                        cartItems.length === 0 ? (
                            <p className="text-gray-500 text-center mt-10">Your cart is empty</p>
                        ) :
                            (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-1">
                                        <img src={item.thumbnail} alt={item.title} className="w-20 h-20 bg-gray-50" />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="font-medium">{item.title}</h3>
                                                <p className="text-cyan-600 font-bold">${item.price}</p>
                                            </div>
                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center rounded border">
                                                    <button
                                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                                                        className="p-2 bg-gray-200 hover:bg-gray-300">-</button>
                                                    <span className="px-2">{item.quantity}</span>
                                                    <button
                                                        onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                                                        className="p-2 bg-gray-200 hover:bg-gray-300">+</button>
                                                </div>
                                                <button
                                                    onClick={()=>handelRemoveFromCart(item)}
                                                    className="p-2 text-red-500 hover:text-red-700 text-sm hover:underline cursor-pointer">Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                    }
                </div>

                {
                    cartItems.length > 0 && (
                        <div className="border-t p-4 bg-gray-50">
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-bold text-gray-700">Total:</span>
                                <span className="font-bold text-xl text-cyan-600">${cartTotalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={()=>dispatch(clearCart())} className="flex-1 bg-gray-200 py-2 rounded hover:bg-gray-300">Clear</button>
                                <button className="w-2/3 bg-cyan-600 text-white rounded hover:bg-cyan-700 font-medium">Checkout</button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default CartDrawer