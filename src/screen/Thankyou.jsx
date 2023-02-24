

import "../style/thankyou.css"
import "../style/app.css"

import { Button } from "reactstrap"




import Celebrate from "../images/celebrate.png"

import { useNavigate } from "react-router-dom"



const App = () => {


    const navigate = useNavigate()


    return (

        <div className="thankyou_base">

            <img style={{ marginBottom: "2rem" }} src={Celebrate} />

            <h3 style={{ marginBottom: "2rem", color: "white" }} className="screen1_heading" >Thank you!</h3>
            <span className="thankyou_text">We will notify you as soon as we've launched.</span>
            <span style={{ marginBottom: "2rem" }} className="thankyou_text">You will get only access before the general public.</span>

            <Button style={{ width: "20%", color: "rgba(23, 107, 58, 1)" }} color="light" onClick={() => navigate("/foresome")}>Home</Button>



        </div>
    )

}









export default App