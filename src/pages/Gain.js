import { Fade } from "react-reveal"
import Gallery from "../components/Gallery"

const Gain = ()=>{
    return(
    <div>
    <div>
        <Fade right>
            <Gallery categoria='Aumento'/>
        </Fade>
    </div>
    <div>
       
        <Fade left>
            <Gallery categoria='Aumento1'/>
        </Fade>
    </div>
    </div>
    )
}
export default Gain