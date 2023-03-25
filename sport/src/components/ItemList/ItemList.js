import React from 'react'
import Item from '../Item/Item'
function ItemList({ products }) {
  return (
    <div>
     <div className='justify-content-evenly' style={{display:'flex'}} >
        { products.map(products => <Item key={products.id} {...products} /> )}
       </div>
   </div>
  )
}

export default ItemList
