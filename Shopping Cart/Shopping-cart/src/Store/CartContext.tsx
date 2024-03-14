import { type ReactNode, createContext, useContext, useState } from "react";
import { ItemCardprops } from "../Components/itemsCard";

type CartItem = ItemCardprops;


// define type for context

type CartcontextProps = {
    cartItems :CartItem[],
    addToCart:(item:CartItem)=>void,
    removeFromCart:(itemId:number)=>void,
}

const CartContext = createContext<CartcontextProps| undefined>(undefined);

//custom hook

const useCartcontext = () =>{
    const CartCtx = useContext(CartContext);
    if (!CartCtx) {
        throw new Error('Cnt used Outside provider!!')
    }
    return CartCtx;

}


//context provider PRops
type ContextProviderProps = {
    children:ReactNode
}







// Context Provider

const ContextProvider: React.FC<ContextProviderProps> = ({children}) =>{
    const [cartItems, setCartItems] = useState<CartItem[]>([])// must be of type cartItem
    
    // add cart
    const addToCart = (item:CartItem) =>{
        return [...cartItems,item];
    }


    // remove cart
    const removeFromCart = (itemId:number) =>{
        const updatedCart = cartItems.filter(item=>item.id!== itemId);
        setCartItems(updatedCart);
    }

    //i need to pass value to Provider
    const Value = {
        cartItems,
        addToCart,
        removeFromCart
    }



    return(
        <CartContext.Provider value={Value}>{children}</CartContext.Provider>
        
    )

}


