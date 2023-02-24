//https://www.figma.com/file/h9B5qC5V4mIohxH2vzy8vO/playgolfwithfriends-Mock?node-id=0%3A1&t=KRWdK3dcXqIMz4x0-0

import { Button, Form, FormGroup, Input, FormText } from 'reactstrap';

import "../style/app.css"
import "../style/screen3.css"
import Logo from "../images/logo.png"
import Download1 from "../images/download1.png"
import Download2 from "../images/download2.png"
import Mobile1 from "../images/mobile1.png"
import Mobile2 from "../images/mobile4.svg"
import Mobile3 from "../images/mobile3.svg"
import Mobile4 from "../images/mobile4.png"
import Hockey from "../images/hockey.svg"
import CurveMobile from "../images/curveMobile.png"

import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { api_url } from '../config/api';
import { toast } from 'react-toastify';


const App = () => {


  const navigate = useNavigate()

  const state = useSelector(state => state)

  const [userEmail, setUserEmail] = useState("")


  const addSubscription = () => {

    setLoading(true)
    axios.post(`${api_url}/subscriptions`, {
      data: {
        email: userEmail

      }
    })
      .then(res => { res.data?.data ? toast.success("Your Email has been added") : toast.error("Something went wrong"); setLoading(false) })
      .catch(err => { err?.response?.data?.error?.message == "This attribute must be unique" ? toast.error("Your email already exists") : toast.error(err?.response?.data?.error?.message); setLoading(false) })

  }


  const [isLoading, setLoading] = useState(false)

  return (


    <div className="foresome_base">



      <div className="foresome_home_navbar">

        <img className="logo" src={Logo} />



        <div className="download_img_div download_img_screen_div" style={{ width: "min-content", height: "100%" }}>
          <img className="download_img_screen" src={Download1} />
          <img className="download_img_screen" src={Download2} />
        </div>

      </div>


      <div className="foresome_screen1">

        <div className="screen1_left">

          <img src={Hockey} className="hockey_img" />

          <h1 className="screen1_heading">Join local tee times and find your ideal golf partner anywhere</h1>
          <span className="screen1_text">Golf's number one compatibility app that helps you find partners that you actually want to play with whereever you are.</span>

          <div className="download_img_div download_img_screen_div">
            <img className="download_img_screen" src={Download1} />
            <img className="download_img_screen" src={Download2} />
          </div>

        </div>


        <div className="screen1_right front_screen">

          <img src={CurveMobile} className="mobile1 double_mobile" />

        </div>

      </div>


      <div className="foresome_screen2">


        <div className="signup_div" style={{ marginBottom: "5rem" }}>

          <span className="signup_left"><h3 className="screen2_heading">Sign up for the newsletter today.</h3> <span className="screen2_text">Get launch and be the first to know when Foresome is live in your area. Make the most of vacations, business trips, time off, or the weekend at home with Foresome, golf's only compatibility app</span> </span>



          <span className="signup_right">
            <Form onSubmit={(e) => { e.preventDefault(); addSubscription() }} style={{ margin: "0px", padding: "0px", width: "100%" }}>
              <FormGroup style={{ margin: "0px", padding: "0px" }}>

                <Input required type='email' onChange={(e) => setUserEmail(e.target.value)} className='screen2_input' style={{ backgroundColor: "transparent", color: "white" }} placeholder='Your Email' />
              </FormGroup>

              <Button disabled={isLoading} type="submit" color="light" style={{ color: "rgba(23, 107, 58, 1)" }}>Subscribe</Button>{' '}

            </Form>
          </span>

        </div>

        <span className='page2_subheading'>HOW IT WORKS</span>
        <span className='page2_heading'>Introducing Foresome</span>
        <span className='page2_text' style={{ marginBottom: "3rem" }}>We all know that Tiger and Sergio hated playing with each other, but they had no other choice. You do! Foresome is the golf compatibility app that helps you find ideal golf partners, either at your local golf course or when you are on the road.</span>



        <span className='split_div'>

          <img src={Mobile2} style={{ width: "30%", height: "30rem" }} />

          <span className='miniscreen1_text_div'>
            <span className='page2_subheading' style={{ paddingBottom: "1rem" }}>FEATURE COMING SOON</span>
            <span className='miniscreen1_heading'>Join Local tee Times</span>
            <span className='page2_text' style={{ width: "100%", paddingBottom: "1.5rem" }}>Never play alone again, find your next golf partner on Foresome anytime anywhere</span>

            <Button onClick={() => navigate("/foresome/waitlist")} color="success" style={{ width: "70%" }}>Join Now</Button>

          </span>

        </span>




        <span className='split_div'>


          <span className='miniscreen1_text_div'>

            <span className='miniscreen1_heading'>Find Golfers Anywhere</span>
            <span className='page2_text' style={{ width: "100%", paddingBottom: "1.5rem" }}>Enter parameters such as GHIN, pace of play, gambling preference, dinking preference and more</span>

            <Button onClick={() => navigate("/foresome/waitlist")} color="success" style={{ width: "70%" }}>Join Now</Button>

          </span>
          <img src={Mobile3} style={{ width: "30%", height: "30rem" }} />


        </span>

      </div>


      <div className="foresome_screen_3">

        <img src={Mobile4} className="screen3_left" />
        <span className="signup_left screen3_right">
          <h3 className="screen2_heading">Make the most of your vacation with Foresome</h3>
          <span className="screen2_text">We all have been on vacation with a significant other and found ourselves staring out the hotel window at a championship Get launch and be the first to know when Foresome is live in your area. Make the most of vacations, business trips, time off, or the weekend at home with Foresome, golf's only compatibility app</span>
        </span>



      </div>



      <div className="foresome_screen_4">


        <img src={Logo} className="footer_logo" />
        <h3 className="screen2_heading footer_heading">Play golf on business trips with ease</h3>
        <span className="footer_text screen1_text">We all have been on vacation with a significant other and found ourselves staring out the hotel window at a championship Get launch and be the first to know when Foresome is live in your area. Make the most of vacations, business trips, time off, or the weekend at home with Foresome, golf's only compatibility app</span>


        <div className="download_img_div download_img_screen_div footer_btns">
          <img className="download_img_screen" src={Download1} />
          <img className="download_img_screen" src={Download2} />
        </div>


      </div>



      <div className="foresome_footer">@Copyright 2022 Syed Mehdi Raza Naqvi. All Rights Reserved.</div>


    </div>

  )

}



export default App