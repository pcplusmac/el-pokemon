import {useContext} from 'react'
import { PokemonContext } from "../context/PokemonContext"



export default function MyList (){
    const [pokemons] = useContext(PokemonContext)
    console.log("mylist-pokemon:", pokemons)
    return (
        <div>
            <h1> My Pokemons:</h1>
            <ol>
                {pokemons.map((pokemon,index)=> <li key={index}>{pokemon.name}</li>)}
            </ol>
        </div>
    )
}