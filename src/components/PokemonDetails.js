
export default function PokemonDetails({ state }) {
    
    
    
    console.log("details:",state)
    // const abilities = state.abilities.ability
    // console.log("ability name: ", abilities)
    return (
        <> 
            <h3> Name: <span>{state.name}</span></h3>
            <h3>Height: <span>{state.height}</span></h3>
            
            <h3>Weight: <span>{state.weight}</span></h3>
            
            <h3>Ablities: <span></span></h3>
            <ul>
                {state.abilities.map((ability,index) => (<li key={index}> {ability.ability.name}</li>))}
            </ul>
        
            <h3>Moves: </h3>


        </>
    )
}