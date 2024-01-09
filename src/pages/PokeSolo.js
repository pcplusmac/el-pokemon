// import { useContext } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

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
            <div>
                <h2>{state.name}</h2>
                <img id="card-solo" src={state.sprites.back_default} alt={state.name} />
            </div>

            <div className="solodetails-container" style={{ marginLeft: "2px" }}>

                <h3>Height:</h3>
                <p>{state.height}</p>
                <h3>Weight:</h3>
                <p>{state.weight}</p>
                <h3>Moves:</h3>
                <p>{ }</p>
                <h3>Ablities:</h3>
                
                <p>
                    <li>{listAbilities}</li>
                </p>


            </div>
            <div className="button-container">
                <button>back</button>
                <button>save to myList</button>
            </div >

        </>
    )
}