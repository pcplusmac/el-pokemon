import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from "../context/PokemonContext"



export default function MyList() {
    const [pokemons, setPokemons] = useState([])
    console.log("mylist-pokemon:", pokemons)


    async function fecthPokes() {
        const response = await fetch("http://localhost:3000/pokemons")
        const data = await response.json()
        setPokemons(currentState => [...currentState, data])

    }

    useEffect(() => { fecthPokes() }, [])

    return (
        <>
            <h1> My Pokemons:</h1>

            <div className="list-container">

                <ol>
                    {pokemons.map((pokemon, index) => <li key={index}>{pokemon[index].name}</li>)}
                </ol>
            </div>
        </>
    )
}