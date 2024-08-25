import { useState, useContext,useEffect } from "react"
import PokemonCard from "../components/PokemonCard"


export default function Home (){
    
    const num = Math.floor(Math.random(40)*100)
    console.log("num:", num)

    const [starState, setStarState] = useState([])

    console.log("starState:", starState)


    async function fetchStar(){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`)
        const data =  await response.json()
        
        setStarState(data)
        
    }

    useEffect(() => {fetchStar()},[])
    
    return (
        <>
            <div>
                <h2> Welcom come to El-pokemon</h2>
            </div>
            <div>
                <h3>
                    Story of Pokemons:
                </h3>
                <p>
                    The original full name of the franchise is Pocket Monsters (ポケットモンスター, Poketto Monsutā), 
                    which has been commonly abbreviated to Pokemon (ポケモン) since its launch. When the franchise was 
                    released internationally, the short form of the title was used, with an acute accent (´) over 
                    the e to aid in pronunciation
                    

                </p>
                <h3>
                    Star Pokemon:

                </h3>
                <ul >
                    <li>Name: {starState.name}</li>
                    <li>Height: {starState.height}</li>
                    
                   

                </ul>

            </div>

        
        </>
        
    )
}