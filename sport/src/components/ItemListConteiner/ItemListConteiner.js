import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"

function ItemListConteiner({greeting}) {
  const [products, setProducts ] = useState ([0])


  useEffect(() => {
    getProducts()
    .then(products => {
      setProducts(products)
    })
  }, [])
  





  return (
    <div >
       <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
  )
}

export default ItemListConteiner
