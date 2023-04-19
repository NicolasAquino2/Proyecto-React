import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../Context/CartContext' 
import { useNotification } from '../../Notification/Notification'
import { Link } from 'react-router-dom'
export const ItemDetail = ({detalle}) => {
    const { addItem, isInCart} = useCart()
    const  {id,name,category,description,price,img,stock} = detalle 

   
     const { setNotification } = useNotification()

   const handleOnAdd = (quantity) => {
        
        addItem(detalle,quantity)
        setNotification ('success',  `Se agrego correctamente ${quantity} ${name}`)
    }


  
   return (

    <div className='d-flex justify-content-center'>
      <article className="Card" key={id} >
            
            <header className="Header" >
                <h2 className="ItemHeader" >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='imagen'/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section> 
            <footer className='ItemFooter'>
            {
                    isInCart(id) ? (
                        <Link className='boton' to='/cart'>Terminar compra</Link>
                    ) : (
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                    )
                }
               
            </footer>        
            
    </article>
    </div>
  )
}


