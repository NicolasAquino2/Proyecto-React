//import logo from './logo.svg';
import './App.css';
import ItemDetailConteiner from './components/ItemDerailContainer/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navbar />
       <Routes>
         <Route path='/'element={<ItemListConteiner greeting={'Nuestros Productos'}  />}  />
         <Route path="/category/:categoryId" element={<ItemListConteiner greeting={'Productos filtrados por categoria'}/>}/>
         <Route path='Item/:ItemId'element={<ItemDetailConteiner/>}/>
       </Routes>
     </BrowserRouter>
    </div>
   
  );
}

export default App;
