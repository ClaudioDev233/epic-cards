import {useEffect , useState, useRef} from 'react'
import './App.css';

function App() {

  const listRef = useRef(null)
  const [card, setCard] = useState([])

  useEffect(()=>{
  
    async function handleGetCard(){
      const resp = await fetch('http://localhost:3333/cards?_limit=30');
      const data = await resp.json()
      setCard(data)
   }
   
   handleGetCard()

  }, [])

  return (
    <>
    <div ref={listRef}> {console.log(listRef)}
      <h1>Total de cards: {card.length}</h1>
    <div className="container">
      {card.map((card,counter)=>(
        <>
        <div className='cards'>
        <img className="card-photo" src={card.card_images[0].image_url_small} alt={`foto da carta ${card.name}`}></img>
        <h1 className="card-name" key={counter}>{card.name}</h1>
        <p>{card.type}</p>
        </div>
        </>
      ))}
    </div>
    <button onClick={() =>  listRef.current.scrollIntoView() } > voltar</button>
    </div>
    </>
    
  );
}

export default App;
