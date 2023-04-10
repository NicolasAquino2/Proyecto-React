
import cart from './assets/cart.svg'
import './CartWidget.css'
import { useCart } from "../../context/CartContext";

const CartWidget = () => {

  const { getQuantity } = useCart()

  return(
      <div to='/cart' className="CartWidget">
          <img src={cart} alt='cart-widget' className='CartImg'/>
          {getQuantity}
         
      </div>
       
  );
 
}


export default CartWidget