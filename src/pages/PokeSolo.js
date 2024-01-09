// import { useContext } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export default function PokeSolo() {

    const history = useHistory()

    console.log("in solo:", history)
    const { state } = useLocation()

    return (
        <>
            <div className="solopage-container">
                <h1> poke sole page</h1>
                <h2>{state.name}</h2>

            </div>
            <div className="button-container">
                <button>back</button>
                <button>save to myList</button>
            </div >
            
        </>
    )
}