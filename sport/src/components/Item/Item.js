import React from 'react'

function Item({id, name, img, price}) {
  return (
    
     <div key={id}>
       
           <img src={img} alt={name} style={{width: 300}}/>
                             
             <h3  >{name} </h3>
             <p>Precio: ${price}</p>
             <button  className='btn btn-primary'>Comprar</button>
             
    </div>   
  )
}

export default Item
