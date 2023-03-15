import CartWidget from "./CartWitget/CartWidget"
const Navbar = () => {
    return (
    
        
        <nav class="navbar navbar-expand-lg bg-light">
          <CartWidget/>
        <div class="container-fluid">

        
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
           
           <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">inicio</a>

               </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Urbanas</a>
             
               </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Deportivas</a>
              </li>

               <li class="nav-item">
                 <a class="nav-link" href="tickets.html">Botas de Futbol</a>
               </li>
               
           </ul>

          </div>

        </div>

     </nav>
        

    )
}

export default Navbar 