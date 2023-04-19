import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where} from "firebase/firestore"
import { db } from "../../service/firebase/fireconfig"


function ItemListConteiner({greeting}) {
  const [products, setProducts ] = useState ([0])
const [loading, setLoading] = useState(true)
const {categoryId}= useParams();


  useEffect(() => {
setLoading(true)

const productsRef = categoryId 
                    ? query (collection(db, 'products'), where('category', '==', categoryId))
                    : collection(db, 'products')

getDocs(productsRef) 
  .then(snapshot => {
    console.log(snapshot)
    const productsAdapted = snapshot.docs.map(doc =>{
    const data = doc.data()
      return { id: doc.id, ...data }
    }) 
    setProducts(productsAdapted)
  }) .catch(error =>{
    console.log(error)
  })
  .finally(() =>{
    setLoading(false)
  })

  }, [categoryId])

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

  return (
    <div >
       <h1 className="d-flex justify-content-center" >{greeting}</h1>
       <ItemList products={products} />
    </div>
  )
}

export default ItemListConteiner

