import { createContext, useState, useContext } from 'react';

const CartContext = createContext('valor inicial')

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    
    

    const addItem =(detalle, quantity) =>{
        if(isInCart(detalle.id)){
          setCart (cart.map(product =>{
            return product.id === detalle.id ?{...product,quantity : product.quantity + quantity} : product
          }));
    
        }else{   setCart ([...cart,{...detalle,quantity}]);
          
         
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

    const getTotal = () => {
      let total = 0
      cart.forEach((e) => total += e.quantity * e.price)
      return total
  };

const total = getTotal()
   
const clearCart = () => {
  setCart([])
}

    return (
        <CartContext.Provider value={{ cart, addItem, getQuantity, removeItem, isInCart, total, clearCart}}>
            { children }
        </CartContext.Provider>
    )
   
}

export const useCart = () => {
     return useContext(CartContext)
    
}