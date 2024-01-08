export default function Pokedex (props){
    return (
        <div>
            <h1> select to import</h1>
            <div className="pokemon-canvas">
                {props.pokeCards}

            </div>
        </div>
    )
}