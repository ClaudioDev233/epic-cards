

import './App.css';

import { Routes, Route } from 'react-router-dom'
import Card from './components/pages/card'
import About from './components/pages/about'
import Home from './components/pages/home';

function App() {

  

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/card" element={<Card/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </>
    
  );
}

export default App;
