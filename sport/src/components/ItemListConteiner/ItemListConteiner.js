import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from "../../service/firebase/firestore/products"
import { useAsync } from "../../hooks/useAsync";


function ItemListConteiner({greeting}) {
  const {categoryId}= useParams();
 
const getProductsWithCategory = () => getProducts(categoryId)
const { data: products, error, loading }  = useAsync(getProductsWithCategory, [categoryId])

if (loading) {
  return (
    <div>
      <h1 className=" d-flex justify-content-center ">Cargando...</h1>
       <div className="d-flex justify-content-center">
         <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
       </div>
    </div>
    )
}

if (error) {
  return (
    <div>
     <h1>Hubo un error</h1>
    </div>
    )
}


  return (
    <div >
       <h1 className="d-flex justify-content-center" >{greeting}</h1>
       <ItemList products={products} />
    </div>
  )
}

export default ItemListConteiner

