// import { useContext } from "react"
import { useHistory,useLocation } from "react-router-dom/cjs/react-router-dom.min"
import PokemonDetails from "../components/PokemonDetails"

export default function PokeSolo() {

    const history = useHistory()
    const { state } = useLocation()
    function backClick(){
        history.push(`/pokedex`)
        
    }

    return (
        <>
            
            <img id="card-solo" src={state.sprites.back_default} alt={state.name} style={{justifyContent:"center"}} />

            <div className="solodetails-container">
              <PokemonDetails state={state}/>
            </div>
            <div className="button-container">
                <button onClick={backClick}>back</button>
                <button>save to myList</button>
            </div >

        </>
    )
}