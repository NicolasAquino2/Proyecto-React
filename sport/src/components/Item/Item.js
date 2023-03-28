import React from 'react'
import './Item.css'
import { useNavigate } from 'react-router-dom'

function Item(product) {

  const {id, name, img, price} = product;
  const navigate = useNavigate()
  return (
    
     <div className='CardItem' >
       
           <img src={img} alt={name} style={{width: 300}}/>
                             
             <h3  >{name} </h3>
             <p>Precio: ${price}</p>
             <button onClick={() => navigate(`/item/${id}`)} className='boton'>Ver detalle</button>
             
    </div>   
  )
}

export default Item
