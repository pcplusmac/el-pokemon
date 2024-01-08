export default function Pokedex (props){
    return (
        <div>
            
            <div className="pokemon-canvas">
                {props.pokeCards}

            </div>
        </div>
    )
}