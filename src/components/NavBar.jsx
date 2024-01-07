import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/pokemonList">My Pokemon List</NavLink>
            <NavLink to="/pokedex">Pokedex</NavLink>
            <NavLink to="/aboutUs">About Us</NavLink>
        </nav>
    )
}