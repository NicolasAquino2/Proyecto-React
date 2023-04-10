import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart(prev => [...prev, productToAdd])
        } else {
            console.log('No se agrega porque ya esta en el carrito')
        }
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const updatedCart = cart.filter(prod => prod.id !== id)
        setCart(updatedCart)
    }
    
    const getQuantity = () => {
        let cant = 0
        cart.forEach((e) => cant += e.quantity)
        return cant
    };

   

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, removeItem, isInCart }}>
            { children }
        </CartContext.Provider>
    )
    
}

export const useCart = () => {
     return useContext(CartContext)
    
}