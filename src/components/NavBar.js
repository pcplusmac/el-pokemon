import { NavLink } from "react-router-dom/cjs/react-router-dom.min"

export default function NavBar(){

    const style = {
        color: "black",
        fontFamily: "Lucida Console",
        fontWeight: "bold"


    }

    const active = {
        color:'red',
        fontStyle:"italic"

    }

    return (
        <nav>
            <NavLink exact activeStyle={active} to="/" style={style}>Home</NavLink>
            <NavLink activeStyle={active} to="/pokemonList" style={style}>My Pokemon List</NavLink>
            <NavLink activeStyle={active} to="/pokedex" style={style}>Pokedex</NavLink>
            <NavLink activeStyle={active} to="/aboutUs" style={style}>About Us</NavLink>
        </nav>
    )
}