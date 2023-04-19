import React from 'react'
import { useCart } from '../../Context/CartContext'
import { Link } from 'react-router-dom'
import '../Cart/Cart.css'
function Cart() {
    const {cart, total} = useCart()

  return (
    <div>
        <h1 className='titulo'>Carro de compras</h1>

      <div>
        {
            cart.map(prod =>{
                return(

<table key={prod.id} className="table style">
  <thead>
    <tr>
      <th scope="col">Productos</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Precio x Cantidad</th>
   
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{prod.name}</td>
      <td>{prod.quantity}</td>
      <td>${prod.price}</td>
    </tr>
  
</tbody>
</table>



                )
            })
        }


      </div>
     
      <h1 className='total'>total de la compra ${total}</h1>
      <Link to= '/checkout' className='botonCheck'>checkout</Link>
    </div>


    


  )
}

export default Cart
