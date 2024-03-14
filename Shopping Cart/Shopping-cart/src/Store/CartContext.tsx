import { type ReactNode, createContext, useContext, useState } from "react";
import { ItemCardProps } from "../Components/ItemsCard";

type CartItem = ItemCardProps;


// define type for context

type CartcontextProps = {
    cartItems :CartItem[],
    addToCart:(item:CartItem)=>void,
    removeFromCart:(itemId:number)=>void,
}

export const CartContext = createContext<CartcontextProps| undefined>(undefined);

//custom hook

export const useCartcontext = () =>{
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

export const ContextProvider: React.FC<ContextProviderProps> = ({children}) =>{
    const [cartItems, setCartItems] = useState<CartItem[]>([])// must be of type cartItem
    
    // add cart
// Function to add an item to cart
const addToCart = (item: CartItem) => {
    setCartItems(prevItems => [...prevItems, item]);
    console.log(cartItems);
};


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


