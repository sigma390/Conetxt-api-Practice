import { createContext, useContext } from "react";
import { ItemCardprops } from "../Components/itemsCard";

type CartItem = ItemCardprops;


// define type for context

type CartcontextProps = {
    items :[],
    addItem:(item:CartItem)=>void,
    removeItem:(item:CartItem)=>void,
}

const CartContext = createContext(null);

//custom hook

const useCartcontext = () =>{
    const CartCtx = useContext(CartContext);
    if (!CartCtx) {
        throw new Error('Cnt used Outside provider!!')
    }
    return CartCtx;

}


// Context Provider

const ContextProvider: React.FC = () =>{

    return(
        
    )

}


