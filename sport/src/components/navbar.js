import CartWidget from "./CartWitget/CartWidget"

const Navbar = () => {
    return (
    
        
        <nav className="navbar navbar-expand-lg">

         <h2 style={{padding: 30}} >Sport</h2>
         
        <div className="container-fluid">

        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
           
           <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">inicio</a>

               </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Urbanas</a>
             
               </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Deportivas</a>
              </li>

               <li className="nav-item">
                 <a className="nav-link" href="#">Botas de Futbol</a>
               </li>
               <CartWidget/>
           </ul>
           
           
          </div>

        </div>

     </nav>
        

    )
}

export default Navbar 