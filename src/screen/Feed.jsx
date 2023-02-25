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

    }, [state.articles])






    return (


        <div className="news_page_base">

            <Navbar />

            <div className="news_page_articles">



                {
                    state.articles.map((v, i) =>

                        <Col key={i} id={`first_article${i}`} sm="12">

                            <Card body>
                                <CardTitle onClick={() => navigate("/newsapp/article")} tag="h5" className="max_lines1">
                                    {v.attributes.title}
                                </CardTitle>


                                <CardText className="max_lines2">
                                    {v.attributes.description}

                                </CardText>

                                <Button color="light" className="feed_page_author_bar">

                                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                        <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                        <h6>{v.attributes?.author?.data[0]?.attributes?.username}</h6>
                                    </span>

                                    <span style={{ color: "gray" }}>2 mins ago</span>

                                </Button>


                            </Card>

                        </Col>



                    )}

                {/* <Row>
                    <Col sm="6">
                        <Card body>
                            <CardTitle tag="h5" className="max_lines1">
                                Special Title Treatment
                            </CardTitle>
                            <CardText className="max_lines2">
                                With supporting text below as a natural lead-in to additional content.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus sint laudantium accusantium dolore, id odio magni harum fugiat quisquam quo nemo ut voluptatibus at cum assumenda tempore dolorum itaque!

                            </CardText>
                            <Button color="light" className="feed_page_author_bar">

                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                    <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                    <h6>Syed Mehdi Raza Naqvi</h6>
                                </span>

                                <span style={{ color: "gray" }}>2 mins ago</span>

                            </Button>


                        </Card>
                    </Col>


                    <Col sm="6">
                        <Card body>
                            <CardTitle tag="h5" className="max_lines1">
                                Special Title Treatment
                            </CardTitle>
                            <CardText className="max_lines2">
                                With supporting text below as a natural lead-in to additional content.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus sint laudantium accusantium dolore, id odio magni harum fugiat quisquam quo nemo ut voluptatibus at cum assumenda tempore dolorum itaque!

                            </CardText>
                            <Button color="light" className="feed_page_author_bar">

                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                    <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                    <h6>Syed Mehdi Raza Naqvi</h6>
                                </span>

                                <span style={{ color: "gray" }}>2 mins ago</span>

                            </Button>


                        </Card>
                    </Col>
                </Row>
 */}





            </div>

        </div>
    )

}




export default App