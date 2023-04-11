import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useCart } from '../../context/CartContext' 
export const ItemDetail = ({detalle}) => {

    const  {id,name,category,description,price,img,stock} = detalle 

    const {addItem} = useCart()

   const handleOnAdd = (quantity) => {
        
        addItem(detalle,quantity)
    }
  
   return (

    <div className='d-inline-flex'>
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
                <ItemCount onAdd={handleOnAdd} stock={stock} />
            </footer>        
            
    </article>
    </div>
  )
}


