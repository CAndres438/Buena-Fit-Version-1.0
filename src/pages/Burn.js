import { Fade } from "react-reveal"
import Gallery from "../components/Gallery"

const Burn = ()=>{
    return(
    <div>
    <div>
        <Fade right>
            <Gallery categoria='Definición'/>
        </Fade>
    </div>
    <div>
       
        <Fade left>
            <Gallery categoria='Definición1'/>
        </Fade>
    </div>
    </div>
    )
}
export default Burn