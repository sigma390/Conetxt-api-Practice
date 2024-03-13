import React from 'react'


export type ItemCardprops = {
    id:number,
    name:string,
    price:number

}







const itemsCard = ({name,price}:ItemCardprops) => {

    function handleAdd(){

    }

    function handleRemove(){

    }



  return (
    <div className="bg-gray-200 h-96 w-80">
        <h2 className="text-center">{name}</h2>
        <h2 className="text-center">{price}</h2>
        <button onClick={handleAdd}>Add </button>
        <button onClick={handleRemove}> Remove</button>
    </div>
  )
}

export default itemsCard
