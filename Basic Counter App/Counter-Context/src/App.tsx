import { useContext, useState } from 'react'

import './App.css'
import { CounterContext } from './Store/Counter'
import Comp1 from './Components/Comp1';
import Comp2 from './Components/Comp2';

function App() {

  const countctx = useContext(CounterContext);

  return (
    <>
      <div>
        <h1>Count is{countctx?.count} </h1>
        <Comp1/>
        <Comp2/>
        
      </div>
      
    </>
  )
}

export default App
