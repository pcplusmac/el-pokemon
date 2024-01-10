import NavBar from "./NavBar";
import imagelogo from '../images/pikachu-logo.jpg'

export default function Header() {


    return (

        <div className="poke-header">

            <figure>
                <img src={imagelogo} style={{
                    width: "50px",
                    height: "50px"
                }} />
                <figcaption><h3>El-pokemon</h3></figcaption>
            </figure>
            <NavBar />
        </div>



    )
}
