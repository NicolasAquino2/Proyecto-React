import { useState, useEffect } from 'react'
//import { getProductById } from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'  
import { db } from '../../service/firebase/fireconfig'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const { ItemId } = useParams()


    useEffect(() => {
       setLoading(true)
       const productRef = doc(db, 'products', ItemId)

      getDoc(productRef)
           .then(snapshot => {
            console.log(snapshot)
            const data = snapshot.data()
            const productsAdapted = {id: snapshot.id, ...data}
            setProduct(productsAdapted)
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(() => {
            setLoading(false)
        })
       // getProductById(ItemId).then(response => {
         //   setProduct(response)
       // }).catch(error => {
       //  console.log(error)
       // })
    },  [ItemId])

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

    
    return(
        <div >
            <ItemDetail detalle={product}  />
        </div>
    )
}
export default ItemDetailContainer