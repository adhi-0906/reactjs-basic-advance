import { Route, Routes } from "react-router-dom"
import SingleForm from "./component/form/singleform"
import MultiForm from "./component/form/multiform"

function Landingscreen(){
    return(
        // here the will be Jsx
        <div>
            <Routes>
                <Route path="/" element={<SingleForm/>}/>
                <Route path="/multi" element={<MultiForm/>}/>

            </Routes>
        </div>
    )
}

export default Landingscreen
