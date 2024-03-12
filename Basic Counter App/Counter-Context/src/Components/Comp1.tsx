import React, { useContext } from 'react'
import { CounterContext } from '../Store/Counter'

const Comp1 = () => {



    //use that context var 
  const counterCtx:any =useContext(CounterContext);
  return (
    <div className='border-2 border-black'> 
        <h1>this is comp one </h1>
        <button onClick={()=>counterCtx.setCount(counterCtx.count+1)}>increment</button>
        <button onClick={()=>counterCtx.setCount(counterCtx.count-1)}>decrement</button>

      
    </div>
  )
}

export default Comp1
