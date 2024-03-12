import { type ReactNode, createContext, useState } from "react";


const CounterContext = createContext(null);


type ContextProviderProps = {
    children:ReactNode;
}



export function ContextProvider({children}:ContextProviderProps){

    const [count, setCount] = useState(null);
    return (

     <CounterContext.Provider value={count}>
            {children}
        </CounterContext.Provider>




    )
}