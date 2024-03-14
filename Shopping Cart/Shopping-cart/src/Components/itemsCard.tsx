
import React, { useContext } from 'react';
import { CartContext, useCartcontext } from '../Store/CartContext'; // Import the CartContext

// Define the props type for the item card
export type ItemCardProps = {
  id: number;
  name: string;
  price: number;
};

// Define the item card component
const ItemsCard: React.FC<ItemCardProps> = ({ id, name, price }) => {
  const { addToCart, removeFromCart } = useCartcontext(); // Access the cart context

  // Function to handle adding the item to the cart
  const handleAdd = () => {
    addToCart({ id, name, price }); // Call the addToCart function from the cart context
    
  };

  // Function to handle removing the item from the cart
  const handleRemove = () => {
    removeFromCart(id); // Call the removeFromCart function from the cart context
  };

  return (
    <div className="bg-gray-200 h-80 w-80 mt-20">
      <h2 className="text-center">{name}</h2>
      <h2 className="text-center">{price}</h2>
      <div className=' flex justify-between'>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>Remove</button>

      </div>
      
    </div>
  );
};

export default ItemsCard;