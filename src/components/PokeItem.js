


export default function PokeItem({ item }) {



    console.log("details:", item)
    // const abilities = state.abilities.ability
    // console.log("ability name: ", abilities)

    const name = item.name


    return (
        <>
             <h3>{name}</h3>
             <button> back</button>
             <button>customise name</button>
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