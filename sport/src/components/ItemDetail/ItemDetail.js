import Item from '../Item/Item'
import ItemList from '../ItemList/ItemList'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    
    return (
        <article>
            <header>
                <h2 >
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name}/>
            </picture>
            <section>
                <p >
                    Categoria: {category}
                </p>
                <p >
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>  
            
        </article>
    )
}

export default ItemDetail