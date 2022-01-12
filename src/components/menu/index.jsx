import { Link } from "react-router-dom";

export default function Menu(){
    return <nav className="menu">
        <h1 className="menu-title">Card Shop</h1>
        <ul className="menu-list">
            <li><Link className="menu-list-item" to="/">Home</Link></li>
            <li><Link className="menu-list-item" to="/cart">Carrinho</Link></li>
            <li><Link className="menu-list-item" to="/about">About</Link></li>
        </ul>
    </nav>
}