import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from "../context/PokemonContext"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import PokemonDetails from '../components/PokemonDetails'
import PokemonCard from '../components/PokemonCard'

// 'http://localhost:3000/pokemons'


export default function MyList() {
    
    const history = useHistory()
    const [pokemons, setPokemons] = useState([])
    console.log("mylist-pokemon:", pokemons)
    // 

    async function fecthPokes() {
        const response = await fetch(process.env.REACT_APP_API_URL)
        const data = await response.json()
        console.log("mylist:", data)
        setPokemons(data)
        // setPokemons(currentState => [...currentState, ...data])

    }

    useEffect(() => { fecthPokes() }, [])

    // function showCardClick(e){
    //     console.log("myList:",e.target.textContent)

    //     history.push(`/pokedex/${e.target.textContent}`)

        
    // }

    return (
        <>
            <h1> My Pokemons:</h1>

            <div className="list-container">

                {/* <ol>
                    {pokemons.map((pokemon, index) => <li key={index} onClick={showCardClick}>{pokemon.name}</li>)}
                </ol> */}

                {pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} />)}
            </div>
        </>
    )
}