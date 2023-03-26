import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory  } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

function ItemListConteiner({greeting}) {
  const [products, setProducts ] = useState ([0])

const {categoryId} = useParams


  useEffect(() => {

    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId)
    .then(products => {
      setProducts(products)
    })
  }, [categoryId])
  





  return (
    <div >
       <h1>{greeting}</h1>
       <ItemList products={products}/>
    </div>
  )
}

export default ItemListConteiner

