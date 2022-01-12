import Cards from "../../cards"
import {useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Card(){
  const params = useParams()
  console.log(params)
  const [card, setCard] = useState([])


  useEffect(()=>{
  
    async function handleGetCard(){
      const resp = await fetch(`http://localhost:3333/cards?race=${params.category}`);
      const data = await resp.json()
      setCard(data)
   }
   
   handleGetCard()

  }, [params.category])

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