import { useState,createContext} from "react";





const PokemonContext = createContext()

function PokemonContextProvider ({children}){
    const [pokemons,setPokemons]=useState([])
    return(
        <PokemonContext.Provider value={[pokemons,setPokemons]}>
            {children}
        </PokemonContext.Provider>
    )
}

export {PokemonContext,PokemonContextProvider}