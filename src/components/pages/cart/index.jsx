import { useContext } from 'react'
import {CartContext }from '../../contexts/cart'

export default function Cart(){
   const {cart} = useContext(CartContext)

    return (
        <div>
        {cart.map(item => <div>{item.name} - {
                new Intl.NumberFormat(
                  'pt-BR',
                  { style: 'currency', currency: 'BRL' }
                ).format(item.card_prices[0].cardmarket_price)}</div>)}
       </div>
    ) 
} 