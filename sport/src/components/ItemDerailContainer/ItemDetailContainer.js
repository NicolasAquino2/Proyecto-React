import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../../service/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';
const ItemDetailContainer = () => {
    const { ItemId } = useParams()
    const getProductswithId = () => getProductsById(ItemId)
    const { data: product, error, loading } = useAsync(getProductswithId, [ItemId]) 

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
            <h1>hubo un error</h1>
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