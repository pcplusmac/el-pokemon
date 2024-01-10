import NavBar from "./NavBar";
import imagelogo from '../images/pikachu-logo.jpg'

export default function Header (){


    return(
        <div className="poke-header">
            <img src={imagelogo} style={{
                width:"50px",
                height:"50px"
            }}/>
            <h1>El-pokemon</h1>
            <NavBar />
        </div>
    )
}
