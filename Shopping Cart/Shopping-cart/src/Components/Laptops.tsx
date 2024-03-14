

import React, { useState } from 'react'
import ItemsCard, { ItemCardProps } from './ItemsCard'





// Sample laptop data
const sampleLaptops: ItemCardProps[] = [
  { id: 1, name: 'Laptop 1', price: 999 },
  { id: 2, name: 'Laptop 2', price: 1299 },
  { id: 3, name: 'Laptop 3', price: 899 },
];







const Laptops = () => {

    const[laptops, setLaptops] = useState<ItemCardProps[]>(sampleLaptops);//initialise the laptops state variable with our sample laptops


  return (
    <div className=' flex grid-cols-4 gap-6 bg-green-500 '>
        <h1 className="text-3xl justify-center text-center">Laptops</h1>
        {laptops.map((laptop) => (
        <ItemsCard key={laptop.id} name={laptop.name} price={laptop.price} id={laptop.id}  />
      ))}



    </div>
  )
}

export default Laptops
