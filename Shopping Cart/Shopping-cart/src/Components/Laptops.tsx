

import React, { useState } from 'react'
import { ItemCardprops } from './itemsCard'


type LaptopProps = ItemCardprops






const Laptops = () => {

    const[laptops, setLaptops] = useState<LaptopProps>([]);

  return (
    <div className='bg-green-500 justify-center items-center'>
        <h1 className="text-3xl text-center">Laptops</h1>


    </div>
  )
}

export default Laptops
