import Cards from "../../cards"
import {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
export default function Card(){
  const [card, setCard] = useState([])

  useEffect(()=>{
  
    async function handleGetCard(){
      const resp = await fetch('http://localhost:3333/cards?_limit=30');
      const data = await resp.json()
      setCard(data)
   }
   
   handleGetCard()

  }, [])
    return <>
    <div>
      <h1>Home</h1>
      <Link to="/about">Ir para About</Link>
        <Cards
        card={card}
        ></Cards>
    </div>
    </>
}