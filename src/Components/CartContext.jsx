import { createContext, useState, useEffect} from "react";
import toast from 'react-hot-toast'; 

export const CartContext = createContext();

export function CartProvider({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart')
        return savedCart ? JSON.parse(savedCart) : []
    })

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExist = prevItems.find((item) => item.id === product.id)
            if (itemExist) {
                toast.success(`${product.name} added to cart`)
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1}
                        : item
                )
            } else {
                toast.success('Item added to cart')
                return [...prevItems, {...product, quantity: 1}]
            }
        });
    };

    const reduceQuantity = (id) => {
        setCartItems((prevItems) => {
            
            const itemToReduce = prevItems.find((item) => item.id === id)

            if (itemToReduce) {
                if (itemToReduce.quantity === 1) {
                    toast.success('Item removed from cart')
                }else {
                    toast.success('Item quantity reduced')
                }
            }
            return prevItems
                .map((item) =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0)
        });
    };

    const addQuantity = (id) => {
        setCartItems((prevItems) => {
            toast.success('Item quantity added')
            return prevItems.map((item) => 
                    item.id === id ?
                        { ...item, quantity: item.quantity + 1}
                        : item
                    )
        });
    };

    const removeFromCart = (id) => {
        toast.success('Item removed from cart')
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    };

    const resetCart = () => {
        setCartItems([])
        localStorage.removeItem('cart')
    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, reduceQuantity, addQuantity, removeFromCart, resetCart}} >
            {children}
        </CartContext.Provider>
    )
};