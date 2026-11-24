import { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar.jsx';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  }

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  }

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) => prevCart.map(item => {
      item.id === itemId ? {...item, quantity} : item;
    }));
  }

  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;