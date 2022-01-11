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
        {TYPES.map((type) => <div className="category-item">{type}</div>)}
    </div>
}