import { useLocation,useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ItemDetails from "../components/ItemDetails"


export default function PokeItem({ item }) {



    console.log("detailsA:", item.name)
    // const abilities = state.abilities.ability
    // console.log("ability name: ", abilities)

    // const name = item.name

    const history = useHistory()
    const {state} = useLocation()
    // const name = state.name



    return (
        <>
             {/* <h3>{name}</h3> */}
             <div className="solodetails-container">
                <ItemDetails state={item} />
            </div>
             <button> customise name</button>
             <button>delete</button>
 
         </> 
     )
    
   
            
            {/* <h3> Name: </h3><p>{state.name}</p>
            <h3>Height: </h3><p>{state.height}</p>

            <h3>Weight: </h3><p>{state.weight}</p>

            <h3>Ablities: <span></span></h3>

            <ul>
                {state.abilities.map((ability, index) => (<li key={index}> {ability.ability.name}</li>))}
            </ul>




            <h3>Moves: </h3>

            <ul style={{ display: "flex", flexWrap: "wrap", flex: "25%", padding: "5px", gap: "2em" }}>
                {state.moves.map((move, index) => <li key={index}>{move.move.name}</li>)}

            </ul> */}





        
}