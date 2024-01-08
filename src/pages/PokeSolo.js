import { useContext } from "react"
import { useLocation } from "react-router-dom/cjs/react-router-dom.min"

export default function PokeSolo(){

    const {state} = useLocation()
    
    return (
        <div>
            <h1> poke sole page</h1>
            <h2>{state.name}</h2>



        </div>
    )
}