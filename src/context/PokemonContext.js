import { useState,createContext } from "react";

const PokemonContext = createContext()



function PokemonContextProvider ({children}){
    const [pokemons,setPokemons]=useState([])
    const [pokeState, setPokeState] = useState([])
    fetch('localserv300')
    
    return(
        <PokemonContext.Provider value={[pokeState, setPokeState,pokemons,setPokemons]}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonContext,PokemonContextProvider}