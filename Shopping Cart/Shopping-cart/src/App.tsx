import { useState, useEffect } from 'react';
import './App.css';
import Laptops from './Components/Laptops';
import { useCartcontext } from './Store/CartContext';

function App() {
  const { cartItems } = useCartcontext();
  console.log(cartItems);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < cartItems.length; i++) {
      sum += cartItems[i].price;
    }
    setPrice(sum);
  }, [cartItems]);

  return (
    <>
      <Laptops />
      <div>{price}</div>
    </>
  );
}

export default App;