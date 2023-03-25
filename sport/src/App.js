//import logo from './logo.svg';
import './App.css';
import ItemDetailConteiner from './components/ItemDerailContainer/ItemDetailContainer';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
       <ItemListConteiner greeting={'Nuestros Productos'}  />
       <ItemDetailConteiner/>
    </div>
   
  );
}

export default App;
