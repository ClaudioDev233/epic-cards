import Cards from "../../cards"
import {useEffect , useState, useRef} from 'react'
export default function Home(){
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
    <div>Home
        <Cards
        card={card}
        ></Cards>
    </div>
    </>
}