import CartWidget from "../CartWitget/CartWidget"
import { Link, NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
    
        
      <nav className="NavBar">

         <h2 style={{padding: 30}} >Sport</h2>
         
         <CartWidget/>
         <div className="Categories">
            <Link to='/category/urbanas' className='Option'>Urbanas</Link>
            <Link to='/category/deportivas' className='Option'>Urbanas</Link>
            <Link to='/category/botasdefutbol' className='Option'>Urbanas</Link>
        </div>
       
           
           
        </nav>
        

    )
}

export default Navbar 