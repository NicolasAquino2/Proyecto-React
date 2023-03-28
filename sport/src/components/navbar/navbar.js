import CartWidget from "../CartWitget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
    
        
      <nav className="NavBar">

         <h2 style={{padding: 30}} >Sport</h2>
         
         <CartWidget/>
         <div className="Categories">
            <NavLink to='/category/Urbanas' className='Option'>Urbanas</NavLink>
            <NavLink to='/category/Deportivas' className='Option'>Deportivas</NavLink>
            <NavLink to='/category/Futbol' className='Option'>Futbol</NavLink>
        </div>
       
           
           
        </nav>
        

    )
}

export default Navbar 