import { useLocation,useHistory } from "react-router-dom/cjs/react-router-dom.min"
import ItemDetails from "../components/ItemDetails"


export default function PokeItem({ item,removeItem,updateName }) {



    console.log("detailsA:", item.id)
    // const abilities = state.abilities.ability
    // console.log("ability name: ", abilities)

    const {id,name} = item

    const history = useHistory()
    const {state} = useLocation()
    // const name = state.name

    function handleDelete(){
        fetch(`http://localhost:3000/pokemons/${id}`, {
            method: "DELETE"
        })
        removeItem(id)

    }

    function handleUpdate(name){
        fetch(`http://localhost:3000/pokemons/${id}`, {
            method: "PATCH",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({name: name})
        })
            .then(r => r.json())
            .then(data => updateName(data.id, data.name) )
    }



    return (
        <>
             <label>
                Customise the name?
                <input
                    type="text"
                    onChange={e => handleUpdate(e.target.value)}
                    name = {name}
                />
             </label>
             {/* <h3>{name}</h3> */}
             <div className="solodetails-container">
                <ItemDetails state={item} />
            </div>
             <button onClick={handleUpdate}> customise name</button>
             <button onClick={handleDelete}>delete</button>
 
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