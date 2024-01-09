// import { useContext } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import PokemonDetails from "../components/PokemonDetails"

export default function PokeSolo() {

    const history = useHistory()

    console.log("in solo:", history)
    const { state } = useLocation()

    const abilities = state.abilities.map(ability => { return ability.ability.name })
    // console.log("abilities", abilities)

    function listAbilities() {
        for (const ability of abilities) {
            return ability.ability.name

        }
    }


    return (
        <>
            
            <img id="card-solo" src={state.sprites.back_default} alt={state.name} style={{justifyContent:"center"}} />

            <div className="solodetails-container">
              <PokemonDetails state={state}/>
            </div>
            <div className="button-container">
                <button>back</button>
                <button>save to myList</button>
            </div >

        </>
    )
}