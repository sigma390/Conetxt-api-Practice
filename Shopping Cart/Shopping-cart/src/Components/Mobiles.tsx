

import React, { useState } from 'react'
import ItemsCard, { ItemCardProps } from './ItemsCard'


const Mobs:ItemCardProps[] = [
  {
  id:1,name:'MOB1',price:1200
  },
  {
    id:2,name:'MOB2',price:1700
  } ,
  {
    id:3,name:'MOB3',price:200
  }

]

const Mobiles = () => {
  const [mobiles, setMobiles] = useState<ItemCardProps[]>(Mobs);


  return (
    <div className=' flex ml-26 grid-cols-4 gap-6 bg-blue-300 '>
      {
        mobiles.map(mobile=>(
          <ItemsCard key={mobile.id} name={mobile.name} price={mobile.price} id={mobile.id}/>
        ))
      }
      
    </div>
  )
}

export default Mobiles
