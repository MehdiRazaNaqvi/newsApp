import "../style/create.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { api_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setArticles } from "../store/counterslice"
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";




const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)




    return (


        <div className="news_page_base" >

            <Navbar />

            <div className="create_article_base">

                <Editor


                    // editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                // onEditorStateChange={this.onEditorStateChange}
                />



            </div>

        </div>
    )

}




export default App