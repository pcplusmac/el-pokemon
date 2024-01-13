import { useContext } from "react"
import {useHistory,useLocation } from "react-router-dom/cjs/react-router-dom.min"
import PokemonDetails from "../components/PokemonDetails"
import { PokemonContext } from "../context/PokemonContext"

export default function PokeSolo() {

    const history = useHistory()
    
    const { state } = useLocation()
    console.log("save",state)
    
    const [setPokemons] = useContext(PokemonContext)
    function backClick(){
        history.push(`/pokedex`)
        
    }
    
    function saveClick(){
        
    }

    return (
        <form onSubmit={saveClick}>
            
            <img id="card-solo" src={state.sprites.back_default} alt={state.name} style={{justifyContent:"center"}} />

            <div className="solodetails-container">
              <PokemonDetails state={state}/>
            </div>
            <div className="button-container">
                <button onClick={backClick}>back</button>
                <button type="submit"> save to myList</button>
            </div >

        </form>
    )
}