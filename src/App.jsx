import './App.css';
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import NavBar from "./Components/NavBar";
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Components/CartContext';



function App() {
  return (
  <div>
    <BrowserRouter>
      <CartProvider>
        <NavBar />
          <Routes>
            <Route path='/' element ={<ItemListContainer />} />
            <Route path='/categoria/:categoryId' element ={<ItemListContainer />} />
            <Route path='/Item/:itemId' element ={<ItemDetailContainer />} />
            <Route path='*' element ={<h1>404 NOT FOUND</h1>} />
            </Routes>
        </CartProvider>
    </BrowserRouter>
    
  </div>
    
  );
};

export default App;
