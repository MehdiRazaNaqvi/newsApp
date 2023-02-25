import "../style/feed.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { api_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setArticles } from "../store/counterslice"




const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)


    useEffect(() => {
        axios.get(`${api_url}/news?populate=*`)
            .then(res => { if (res.data?.data) { dispatch(setArticles(res.data?.data)) } else { toast.error("Something went wrong") } })
            .catch(err => toast.error("Something went wrong"))

    }, [])




    const calculate_days = (date) => {
        const pastDate = new Date(date);
        const currentDate = new Date();

        const timeDifference = currentDate.getTime() - pastDate.getTime();


        // const seconds = Math.floor(timeDifference / 1000);
        // const minutes = Math.floor(seconds / 60);
        // const hours = Math.floor(minutes / 60);
        // const days = Math.floor(timeDifference / 24*60*60*1000);
        const days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        // console.log(`${days}`);
        if(days == 0) {return ("today")}
        
        else{
            return (`${days} days ago`)
        }
    }

    return (


        <div className="news_page_base">

            <Navbar />

            <div className="news_page_articles">

                {state.articles.length == 0 ?

                    <span className="no_articles">No Articles</span>

                    :

                    <>
                        <Col id="first_article" sm="12">

                            <Card onClick={() => navigate(`/newsapp/article/${state.articles[0].id}`)} style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>
                                <CardTitle tag="h5" className="max_lines1">
                                    {state.articles[0].attributes.title}
                                </CardTitle>


                                <CardText className="max_lines2">
                                    {state.articles[0].attributes.description}

                                </CardText>

                                <Button color="light" className="feed_page_author_bar">

                                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                        <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                        <h6>{state.articles[0].attributes?.author?.data?.attributes?.username}</h6>
                                    </span>

                                    <span style={{ color: "gray" }}>{calculate_days(state.articles[0].attributes.createdAt)}</span>

                                </Button>


                            </Card>

                        </Col>


                        {state.articles.slice(1).map((v, i) =>

                            <Col key={i} sm="12">

                                <Card onClick={() => navigate(`/newsapp/article/${v.id}`)} style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>
                                    <CardTitle tag="h5" className="max_lines1">
                                        {v.attributes.title}
                                    </CardTitle>


                                    <CardText className="max_lines2">
                                        {v.attributes.description}

                                    </CardText>

                                    <Button color="light" className="feed_page_author_bar">

                                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                            <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                            <h6>{v.attributes?.author?.data?.attributes?.username}</h6>
                                        </span>

                                        <span style={{ color: "gray" }}>{calculate_days(state.articles[0].attributes.createdAt)}</span>

                                    </Button>


                                </Card>

                            </Col>



                        )}
                    </>

                }








            </div>

        </div>
    )

}




export default App