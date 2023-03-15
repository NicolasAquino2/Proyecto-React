//import logo from './logo.svg';
import './App.css';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <ItemListConteiner greeting={'bienvenidos'} />
    </div>
  );
}

export default App;
