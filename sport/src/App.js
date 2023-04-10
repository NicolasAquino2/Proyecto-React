import './App.css';
import { CartProvider } from './context/CartContext';
import ItemDetailConteiner from './components/ItemDerailContainer/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';



function App() {
 

  return (
    <div className="App">
     <BrowserRouter>
      <CartProvider>
       <Navbar />
       <Routes>
         <Route path='/'element={<ItemListConteiner greeting={'Nuestros Productos'}  />}  />
         <Route path="/category/:categoryId" element={<ItemListConteiner greeting={'Productos filtrados por categoria'}/>}/>
         <Route path='Item/:ItemId'element={<ItemDetailConteiner/>}/>
       </Routes>
       </CartProvider>
     </BrowserRouter>
    </div>
   
  )
}

export default App;
