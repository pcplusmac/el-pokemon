
export default function PokemonDetails({ state }) {
    return (
        <> 
            <h3> Name: <span>{state.name}</span></h3>
            <h3>Height: <span>{state.height}</span></h3>
            
            <h3>Weight: <span>{state.weight}</span></h3>
            
            <h3>Moves: <span></span></h3>
        
            <h3>Ablities: </h3>


        </>
    )
}