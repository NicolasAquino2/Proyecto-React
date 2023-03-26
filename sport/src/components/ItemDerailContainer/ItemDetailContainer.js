import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()
console.log(itemId)


    useEffect(() => {
        getProductById(itemId).then(response => {
            setProduct(response)
        }).catch(error => {
         console.log(error)
        })
    }, [itemId])
console.log(itemId)

    return(
        <div >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer