import { AiOutlineShoppingCart } from "react-icons/ai";

const CartWidget = () => {
  return (

      <div className="text-white">
          <button className="btn btn-dark ">
              <AiOutlineShoppingCart/>
              0
          </button>
        
      </div>
  )
}

export default CartWidget