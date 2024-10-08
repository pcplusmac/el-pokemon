import { useState, useEffect, useContext } from 'react'
import { PokemonContext } from "../context/PokemonContext"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import PokeItem from './PokeItem'


// 'http://localhost:3000/pokemons'


export default function MyList() {
    
    const history = useHistory()
    // const [pokemons, setPokemons] = useState([])
    const [pokemons,setPokemons] = useContext(PokemonContext)
    console.log("mylist-pokemon of state in constext:", pokemons)
    // 
    
    async function fecthPokes() {
        const response = await fetch("http://localhost:3000/pokemons")
        const data = await response.json()
        setPokemons(data)
        console.log("mylist from data:", data)
        console.log("updated pokemon stat of context:", pokemons)
        // setPokemons(data)
        // setPokemons(currentState => [...currentState, ...data])
        
    

        // console.log("name:", pokelist)
        

    }

    function removeItem(name){
        const itemscurr = pokemons.filter(pokemon => pokemon.name !== name)
        setPokemons(itemscurr)
    }

    function updateName(id,name){
        const custmisedPoke = pokemons.map(pokemon => {
            if (pokemon.id === id) {
                return {...pokemon,name}
            } else {
                return pokemon
            }
        })
        setPokemons(custmisedPoke)
    }
    
    // const pokelist = pokemons.map((pokemon, index) => <PokemonCard pokemon={pokemon} />)

    const pokelist = pokemons.map((pokemon, index) => (<li> <PokeItem index ={index} item={pokemon} removeItem={removeItem} updateName={updateName}/></li>))

    useEffect(() => { fecthPokes() }, [])

    // const name = pokemons.
    // const pokelist = pokemons.map((poke,index) => (console.log(`{poke.name}`)))

    // function showCardClick(e){
    //     console.log("myList:",e.target.textContent)

    //     history.push(`/pokedex/${e.target.textContent}`)

        
    // }

    return (
        <>
            <h2> My Pokemons:</h2>

            <div className="list-container">

                {/* <ol>
                    {pokemons.map((pokemon, index) => <li key={index} onClick={showCardClick}>{pokemon.name}</li>)}
                </ol> */}
                

                
                <ul>
                    {pokelist}
                    <button>reset</button>
                    
                </ul>

            </div>
            
        </>
    )
}