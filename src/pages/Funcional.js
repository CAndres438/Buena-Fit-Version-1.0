import { Fade } from "react-reveal"
import Gallery from "../components/Gallery"

const Funcional = ()=>{
    return(
    <div>
    <div>
        <Fade right>
            <Gallery categoria='Funcional'/>
        </Fade>
    </div>
    <div>
       
        <Fade left>
            <Gallery categoria='Funcional1'/>
        </Fade>
    </div>
    </div>
    )
}
export default Funcional