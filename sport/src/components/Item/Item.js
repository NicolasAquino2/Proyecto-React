import React from 'react'

import { useNavigate } from 'react-router-dom'

function Item({id, name, img, price,}) {

  const navigate = useNavigate()
  return (
    
     <div>
       
           <img src={img} alt={name} style={{width: 300}}/>
                             
             <h3  >{name} </h3>
             <p>Precio: ${price}</p>
             <button onClick={() => navigate(`/item/${id}`)} className='btn btn-primary'>Ver detalle</button>
             
    </div>   
  )
}

export default Item
