import './App.css';

import { CartProvider } from './Context/CartContext';
import ItemDetailConteiner from './components/ItemDerailContainer/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { NotificationProvide } from './Notification/Notification';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';





function App() {
 
  return ( 
    <div>
     <BrowserRouter>
    
     <NotificationProvide>
      <CartProvider>
       <Navbar />
       <Routes>
         <Route path='/'element={<ItemListConteiner greeting={'Nuestros Productos'}  />}  />
         <Route path="/category/:categoryId" element={<ItemListConteiner greeting={'Productos filtrados por categoria'}/>}/>
         <Route path='Item/:ItemId'element={<ItemDetailConteiner/>}/>
         <Route path='cart'element={<Cart/>}/>
         <Route path='checkout'element={<Checkout/>}/>
       
       </Routes>
       </CartProvider>
       </NotificationProvide>
     </BrowserRouter>
    </div>
   
  )
}

export default App;
