import { createContext } from "react";

type CartContextType = {
    setCartInfo: React.Dispatch<React.SetStateAction<any[]>>
    cartInfo: any[]
}

export const CartContext = createContext<CartContextType>({ setCartInfo: (e) => e, cartInfo: [] })