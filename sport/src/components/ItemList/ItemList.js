import React from 'react'
import Item from '../Item/Item'
function ItemList({ products }) {
  return (
    <div>
     <div className='justify-content-evenly' style={{display:'flex'}} >
        { products.map(prod => <Item key={prod.id} {...prod} /> )}
       </div>
   </div>
  )
}

export default ItemList






