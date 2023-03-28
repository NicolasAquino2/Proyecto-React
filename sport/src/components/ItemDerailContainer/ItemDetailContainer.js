import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})

    const { ItemId } = useParams()


    useEffect(() => {
        getProductById(ItemId).then(response => {
            setProduct(response)
        }).catch(error => {
         console.log(error)
        })
    },  [ItemId])

    
    return(
        <div >
            <ItemDetail detalle={product}  />
        </div>
    )
}
export default ItemDetailContainer