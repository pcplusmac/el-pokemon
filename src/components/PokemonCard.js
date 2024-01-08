
export default function PokemonCard({pokemon}){

    console.log("in card:",pokemon)
    return (
        <div className="poke-card">
                <figure>
                    <img id="card-solo" src={pokemon.sprites.back_default} />
                    <figcaption><h5>{pokemon.name}</h5></figcaption>
                </figure>

        </div>
    )
}
