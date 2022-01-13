import { Link } from "react-router-dom";

const TYPES = [
    "Aqua",
    "Beast-Warrior",
    "Cyberse",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Rock",
    "Warrior",
    "Spellcaster"
   ];

export default function Home(){
    
    return <div className="container_app">
        {TYPES.map((type, typeID) => <div key={typeID} className="category-item">
        <Link to={`./card/${type}`}>{type}</Link>
            </div>)}
    </div>
}