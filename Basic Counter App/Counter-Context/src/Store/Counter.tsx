import { type ReactNode, createContext, useState } from "react";

// Type of Counter Context

type CounterContextProps = {
    count:number,
    setCount:any
}





export const CounterContext = createContext<CounterContextProps | null>(null);










type ContextProviderProps = {
    children:ReactNode;
}



export function ContextProvider({children}:ContextProviderProps){

    const [count, setCount] = useState(0);
    return (

     <CounterContext.Provider value={{count, setCount}}>
            {children}
        </CounterContext.Provider>




    )
}