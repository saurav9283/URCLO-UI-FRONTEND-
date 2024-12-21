import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import AddCart from './pages/AddCart.js';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/cart" element={<AddCart />} />          
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App