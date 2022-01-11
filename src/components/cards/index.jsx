export default function Cards({card}){
return<>
<h1> Total de Cards : {card.length}</h1>
 <div className="container">
  {card.map((card,counter)=>(
    
    <div className='cards'>
    <img className="card-photo" src={card.card_images[0].image_url_small} alt={`foto da carta ${card.name}`}></img>
    <h1 className="card-name" key={counter}>{card.name}</h1>
    <p>{card.type}</p>
    </div>
    
  ))}
</div>
</>

}