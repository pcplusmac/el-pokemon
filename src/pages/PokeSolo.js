import { useContext } from "react"
import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min"
import PokemonDetails from "../components/PokemonDetails"
import { PokemonContext } from "../context/PokemonContext"



export default function PokeSolo() {
    const history = useHistory()

    const { state } = useLocation()
    console.log("state of save btn", state)

    // const pokemon = {
    //     name: state.name,
    //     height: state.height,
    //     weight: state.weight,
    //     sprites: {
    //         back_default: state.sprites.back_default

    //     }
    // }
   
    const [pokemons,setPokemons] = useContext(PokemonContext)
    // const pokemonCon = useContext(PokemonContext)

    console.log("pokemonCon:",pokemons)

    function addPokemon(pokemon) {
        console.log("add",pokemon)
        const newPoke = {
            name: pokemon.name,
            height: pokemon.height
        }
        setPokemons(curr => [...curr,newPoke])
    }

    // console.log("state00", pokemons)
    function backClick() {
        history.push(`/pokedex`)

    }

    function saveClick(e) {
        

        const pokemonConfigObj = {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(state)
        }
        console.log("obj",pokemonConfigObj)

       fetch("http://localhost:3000/pokemons",pokemonConfigObj)
        .then(res => res.json())
        .then(data => addPokemon(data))
    }

    
    
    return (
        <>

            <img id="card-solo" src={state.sprites.back_default} alt={state.name} style={{ justifyContent: "center" }} />

            <div className="solodetails-container">
                <PokemonDetails state={state} />
            </div>
            <div className="button-container">
                <button onClick={backClick}>back</button>
                <button onClick={saveClick}> save to myList</button>
            </div >

        </>
    )
}