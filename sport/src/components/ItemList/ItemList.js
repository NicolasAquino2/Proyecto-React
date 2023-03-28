import React from 'react'
import Item from '../Item/Item'
import './Itemlist.css'
function ItemList({ products }) {

  return (
    <div >
     <div className='justify-content-evenly ' style={{display:'flex'}} >
        { products.map(
          (product, index)=> <Item key={index} {...product} /> )}
       </div>
   </div>
  )
}

export default ItemList






