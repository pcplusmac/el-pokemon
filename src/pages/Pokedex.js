import { useState, useContext,useEffect } from "react"
import PokemonCard from "../components/PokemonCard"


export default function Pokedex (){

    // Create the state for the pokemons get from API.
    const [pokeState, setPokeState] = useState([])

    async function fecthPokes() {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await response.json()
        
        data.results.forEach(poke => fetchPokeDetails(poke.url))
      }
    
      async function fetchPokeDetails(url) {
        const res = await fetch(url)
        const data = await res.json()
        setPokeState(currentState => [...currentState, data])
      }
    
      
      useEffect(() => { fecthPokes() }, [])
    
      const mappedPokeCards = pokeState.map((poke, index) => <PokemonCard key={index} pokemon={poke} />)

    return (
        <div>
            
            <div className="pokemon-canvas">
                {mappedPokeCards}

            </div>
        </div>
    )
}