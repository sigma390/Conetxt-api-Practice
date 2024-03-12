import { type ReactNode, createContext, useState } from "react";

// Type of Counter Context
type CounterContextProps = {
    count:number,
    setCount:any
}
// creation of Context 
export const CounterContext = createContext<CounterContextProps | null>(null);

// we need to mention Context provider function props
type ContextProviderProps = {
    children:ReactNode;
}
// A context Provider Function
export function ContextProvider({children}:ContextProviderProps){

    const [count, setCount] = useState(0);
    return (

     <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>




    )
}