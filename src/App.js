

import './App.css';

import { Routes, Route} from 'react-router-dom'
import Card from './components/pages/card'
import About from './components/pages/cart'
import Home from './components/pages/home';
import Menu from './components/menu';
import Cart from './components/pages/cart';
import { CartProvider } from './components/contexts/cart';

function App() {

  

  return (
    <>
    <CartProvider>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/card/:category" element={<Card/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </CartProvider>
    </>
    
  );
}

export default App;
