import { useHistory } from "react-router-dom/cjs/react-router-dom.min"



export default function PokemonCard({pokemon}){
    console.log("poke:", pokemon)
    const history = useHistory()

    function showSoloClick(){
        history.push(`/Pokedex/${pokemon.name}`,pokemon)

    }
    // console.log("in card:",pokemon)
    return (
        <div className="poke-card" onClick={showSoloClick}>
                <figure>
                    <figcaption><h5>{pokemon.name}</h5></figcaption>

                    <img id="card-solo" src={pokemon.sprites.back_default} alt={pokemon.name}/>
                </figure> 


        </div>
    )
}
