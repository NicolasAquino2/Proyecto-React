import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import { collection,query, where, documentId, getDocs, addDoc, writeBatch } from 'firebase/firestore'
import { useCart } from '../../Context/CartContext'
import { db } from '../../service/firebase/fireconfig'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNotification } from '../../Notification/Notification'
function Checkout() {

 const [orderId, setOrderId] = useState('') 
 const { cart, total, clearCart} = useCart()
 const [loading, setLoading] = useState(false)
 const {setNotification} = useNotification()
 const navigate = useNavigate()

 const createOrder = async (userData) => {
  try{
    setLoading(true)
       const objOrder = {
        buyer: userData,
        items: cart,
        total

        } 
const ids = cart.map (prod => prod.id)
 
const productsRef = query(collection (db, 'products'), where( documentId(), 'in', ids))

const { docs } = await getDocs(productsRef)

const batch = writeBatch(db)
const outOfStock = []


docs.forEach(async doc =>{
  const dataDoc = doc.data()
  const stockDb = dataDoc.stock

  const productAddedToCart = cart.find(prod => prod.id === doc.id)
  const prodQuantity = productAddedToCart?.quantity

    if(stockDb >= prodQuantity) {
        batch.update(doc.ref, {stock: stockDb - prodQuantity})
     } else{
         outOfStock.push({id: doc.id, ...dataDoc}) 
     }
   })
   if(outOfStock.length === 0) {
    batch.commit()
    const orderRef = collection(db, 'orders')

   const orderAdded  = await addDoc(orderRef, objOrder)

   clearCart()
   setOrderId (orderAdded.id)
      
   setTimeout(() =>{
    navigate('/')
   },5000 )

} else{
  setNotification('error', 'Hay productos que no tienen stock', 10)

}

}catch(error){
  setNotification('error', 'Hubo un error al generar la orden', 10)
}finally{
  setLoading(false)
}

}
 
if (loading){
  return(
    <div>
      <h1>Se esta generando su orden...</h1>
    </div>
  )
}

if(orderId) {
  return(
    <div>
      <h1>El id de su compra es: {orderId} </h1>

    </div>
  )
}




  return (
    <div>
        <h1 className='titulo'>checkout</h1>
      <h2 className='titulo'>ingresen sus datos</h2>
      <ContactForm onConfirm={createOrder}/>
    </div>
  )
}

export default Checkout
