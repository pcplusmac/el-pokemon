import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from "../context/PokemonContext"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import PokemonDetails from '../components/PokemonDetails'



export default function MyList() {
    
    const history = useHistory()
    const [pokemons, setPokemons] = useState([])
    console.log("mylist-pokemon:", pokemons)


    async function fecthPokes() {
        const response = await fetch("http://localhost:3000/pokemons")
        const data = await response.json()
        setPokemons(currentState => [...currentState, data])

    }

    useEffect(() => { fecthPokes() }, [])

    function showCardClick(e){
        console.log("myList:",e)

        // history.push(`/pokedex/${e.target.value}`)

        // return (
        //     <PokemonDetails />

        // )

    }

    return (
        <>
            <h1> My Pokemons:</h1>

            <div className="list-container">

                <ol>
                    {pokemons.map((pokemon, index) => <li key={index} onClick={showCardClick}>{pokemon[index].name}</li>)}
                </ol>
            </div>
        </>
    )
}