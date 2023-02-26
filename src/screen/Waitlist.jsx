


import "../style/waitlist.css"
import "../style/app.css"

import Download1 from "../images/download1.png"
import Download2 from "../images/download2.png"
import Mobile1 from "../images/mobile1.png"
import Waitlist from "../images/waitlist2.png"
import { Form, FormGroup, Input, Button, FormFeedback } from "reactstrap"

import { useEffect, useState } from "react"

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { api_url } from "../config/api"
import { userLogin } from "../store/counterslice"
import axios from "axios"




const App = () => {




    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const validateEmail = (email) => {

        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );


    };

    const state = useSelector(state => state.counter)

    const loginSuccess = (res) => {
        dispatch(userLogin({ jwt: res.data.jwt, user: res.data.user }))
        navigate("/newsapp/feed")
    }


    const userAuthenticate = () => {


        setLoading(true)
        axios.post(`${api_url}/auth/local`, { identifier: email, password })
            .then(res => { res.data?.jwt ? loginSuccess(res) : toast.error("Something went wrong..."); setLoading(false) })
            .catch(err => { toast.error("Authentication failed"); setLoading(false) })


    }


    const [isLoading, setLoading] = useState(false)

    console.log(state)


    useEffect(() => {
        if (state.currentUser.jwt) { navigate("/newsapp/feed") }
    }, [])



    return (

        <div style={{ height: "100vh" }} className="waitlist_base foresome_screen1">

            <div className="screen1_left">


                <h1 className="screen1_heading">Join the waitlist and be the first to be notified once we've launched</h1>


                <Form onSubmit={(e) => { e.preventDefault(); userAuthenticate() }} className="waitlist_input">


                    <FormGroup className="formgroup">

                        <Input type="email" invalid={email != '' ? validateEmail(email) ? false : true : false} required onChange={(e) => set_email(e.target.value)} className="input" placeholder="Enter Email" />

                        <Input required onChange={(e) => set_password(e.target.value)} className="input" placeholder="Enter Password" />



                    </FormGroup>

                    <Button disabled={isLoading} type="submit" color="success" className="button_waitlist">Sign in</Button>


                </Form>


            </div>


            <div className="screen1_right">

                <img style={{ height: "80%" }} src={Waitlist} className="mobile1" />

            </div>


            <div className="waitlist_right">

            </div>

        </div>


    )

}






export default App