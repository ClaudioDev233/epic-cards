import { CartContext } from '../contexts/cart'
import {useContext} from 'react'

export default function Cards({card}){
  const {addItem} = useContext(CartContext)
  const {cart} = useContext(CartContext)
return<>
<h1> Total de Cards : {card.length}</h1>
<p>{cart.length}</p>
 <div className="container">
  {card.map((card , counterid)=>(
    
    <div className='cards' key={counterid}>
    <img className="card-photo" src={card.card_images[0].image_url_small} alt={`foto da carta ${card.name}`}></img>
    <h1 className="card-name">{card.name}</h1>
    <p>{card.type}</p>
    <button onClick={() => addItem(card)}>Adicionar</button>
    
    </div>
    
  ))}
  
</div>
</>

}