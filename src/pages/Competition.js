import { Fade } from "react-reveal"
import Gallery from "../components/Gallery"

const Competition = ()=>{
    return(
    <div>
    <div>
        <Fade right>
            <Gallery categoria='Competición'/>
        </Fade>
    </div>
    <div>
       
        <Fade left>
            <Gallery categoria='Competición1'/>
        </Fade>
    </div>
    </div>
    )
}
export default Competition