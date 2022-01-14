import { createContext,useState,useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext([]);


export function CartProvider({children}){
    
    

    const [cart, setCart] = useState([])

    function handleAddCart(item){

        const newCard =  {
            ... item ,
            idCard : uuidv4()
        }

        setCart([...cart, newCard])
        localStorage.setItem("cart", JSON.stringify([...cart, newCard]))
    }
    
    useEffect(()=>{
        function handleLocalStorage(){
            const storedArray = JSON.parse(localStorage.getItem("cart"))
           setCart(storedArray || [])
        }
        handleLocalStorage()
    },[])

   function handleRemoveCard(id){
    const cartFiltered = cart.filter( item => { 
        if(item.idCard === id) {
            return false // remove do carrinho
        } else {
            return true // continua no carrinho
        }
    })
        setCart(cartFiltered)
    localStorage.setItem("cart", JSON.stringify(cartFiltered))

    }


    return (
        <CartContext.Provider 
        value={{
            cart: cart,
            addItem: handleAddCart,
            remove: handleRemoveCard
            }}
        >
            {children}
        </CartContext.Provider>
    )
}