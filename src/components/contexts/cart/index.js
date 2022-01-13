import { createContext,useState,useEffect } from "react";

export const CartContext = createContext([]);


export function CartProvider({children}){
    
    const [cart, setCart] = useState([])

    function handleAddCart(item){
        setCart([...cart, item])
        localStorage.setItem("cart", JSON.stringify([...cart, item]))
    }
    
    useEffect(()=>{
        function handleLocalStorage(){
            const storedArray = JSON.parse(localStorage.getItem("cart"))
           setCart(storedArray || [])
        }
        handleLocalStorage()
    },[])

    return (
        <CartContext.Provider 
        value={{
            cart: cart,
            addItem: handleAddCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}