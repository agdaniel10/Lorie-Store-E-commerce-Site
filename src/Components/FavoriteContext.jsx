import { createContext, useState, useEffect } from "react";
import toast from 'react-hot-toast'; 

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favoriteItems, setFavoriteItems] = useState(() => {
        try {
            const savedFavorite = localStorage.getItem('favorite')
            return savedFavorite ? JSON.parse(savedFavorite) : []
        } catch (error) {
            console.error('Error loading favorites:', error)
            return []
        }
    })

    useEffect(() => {
        localStorage.setItem('favorite', JSON.stringify(favoriteItems))
    }, [favoriteItems])

    const toggleFavorite = (product) => {
        setFavoriteItems((prevItems) => {
            const itemExist = prevItems.find((item) => item.id === product.id)
            if (itemExist) {
                toast.success(`${product.name} is removed from favorites`)
                return prevItems.filter((item) => item.id !== product.id)
            } else {
                toast.success(`${product.name} is added to favorites`)
                return [...prevItems, product]
            }
        });
    };

    const addToFavorite = (product) => {
        setFavoriteItems((prevItems) => {
            const itemExist = prevItems.find((item) => item.id === product.id)
            if (itemExist) {
                return prevItems
            }
            toast.item('Item added to favorite')
            return [...prevItems, product]
        });
    };

    const removeFromFavorite = (id) => {
        toast('Item removed from favorite')
        setFavoriteItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }

    const resetFavorite = () => {
        setFavoriteItems([])
        localStorage.removeItem('favorite')
    }

    return (
        <FavoriteContext.Provider value={{ 
            favoriteItems, 
            toggleFavorite, 
            addToFavorite, 
            removeFromFavorite, 
            resetFavorite
        }}>
            {children}
        </FavoriteContext.Provider>
    )
}