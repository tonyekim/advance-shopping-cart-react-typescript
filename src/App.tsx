import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/shoppingCartContext';



function App() {
  return (
    <ShoppingCartProvider>
    
    <Navbar />
    <Container className="mb-4">
      <Routes>
        <Route path='/' element={<Store/>} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />


      </Routes>

      </Container>
    </ShoppingCartProvider>
    
  );
}

export default App;
