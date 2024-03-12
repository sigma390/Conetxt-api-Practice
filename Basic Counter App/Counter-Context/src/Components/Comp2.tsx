import React, { useContext } from 'react'
import { CounterContext } from '../Store/Counter'

const Comp2 = () => {
    const cntrctx = useContext(CounterContext);
  return (
    <div style={{marginTop:10}}>
        <h1>this is Comp 2</h1>
    <button onClick={()=>cntrctx?.setCount(cntrctx.count+4)}>increment by 4</button>
    <button onClick={()=>cntrctx?.setCount(cntrctx.count-4)}>decrement by 4 </button>

  
</div>
  )
}

export default Comp2
