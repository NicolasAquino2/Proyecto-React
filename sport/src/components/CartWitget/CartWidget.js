import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (

      <div className="text-white">
          <button className="boton">
              <AiOutlineShoppingCart/>
              <p className="text-base text-center"> 0 </p>
          </button>

      </div>
  )
}

export default CartWidget