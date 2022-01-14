import Cards from "../../cards"
import {useContext, useEffect , useState} from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Card(){
  
  const params = useParams()
  
 

  const [card, setCard] = useState([])

  const [page, setPage] = useState(1)

  const handleMorItens = async () =>{

    const resp = await fetch(`http://localhost:3333/cards?race=${params.category}&_limit=20&_page=${page + 1}`);
    const data = await resp.json()

    setCard([...card , ...data])

    setPage(page + 1)
  }



  useEffect(()=>{
  
    async function handleGetCard(){
      const resp = await fetch(`http://localhost:3333/cards?race=${params.category}&_limit=20&_page=1`);
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
        <button onClick={() => {handleMorItens()}}>Clica aqui</button>
    </div>
    </>
}