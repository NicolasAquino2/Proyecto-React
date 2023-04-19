
import cart from './assets/cart.svg'
import './CartWidget.css'
import { useCart } from "../../Context/CartContext";
import { useNavigate } from 'react-router-dom';
const CartWidget = () => {

  
  const { getQuantity } = useCart()
const navigate = useNavigate()

  return(
      <div to='/cart' className="CartWidget" onClick={() => navigate('/cart')}>
          <img src={cart} alt='cart-widget' className='CartImg'/>
          {getQuantity()}
         
      </div>
       
  );
 
}


export default CartWidget