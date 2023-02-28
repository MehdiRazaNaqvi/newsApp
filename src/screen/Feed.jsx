import "../style/feed.css"

import { Row, Col, Card, CardText, CardTitle, Button, Spinner } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { api_url, img_url } from "../config/api"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import { setArticles, setAuthors } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
import ReactMarkdown from 'https://esm.sh/react-markdown@7'



const App = () => {


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const state = useSelector(state => state.counter)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        axios.get(`${api_url}/news?populate=images&populate=author&populate=author.image`)
            .then(res => { setLoading(false); if (res.data?.data) { dispatch(setArticles(res.data?.data)) } else { toast.error("Something went wrong") } })
            .catch(err => { toast.error("Something went wrong"); setLoading(false) })


        axios.get(`${api_url}/users?populate=image`)
            .then(res => { dispatch(setAuthors(res.data)); setLoading(false); })
            .catch(err => { toast.error("Something went wrong"); setLoading(false); })

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
        if (days == 0) { return ("today") }

        else {
            return (`${days} days ago`)
        }
    }

    return (


        <div className="news_page_base">

            <Navbar />

            <div className="news_page_articles">

                {loading ?
                    <Spinner
                        color="secondary"
                        style={{
                            height: '3rem',
                            width: '3rem',
                            margin: "auto",
                            gridColumn: "1/3",
                            marginTop: "12rem"
                        }}
                    // type="grow"
                    >

                    </Spinner>
                    :


                    state?.articles?.length == 0 ?

                        <span className="no_articles">No Articles</span>

                        :

                        <>

                            <Col id="first_article" sm="12">

                                <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>

                                    <CardTitle onClick={() => navigate(`/newsapp/article/${state.articles[0].id}`)} tag="h5" className="max_lines1">
                                        {state.articles[0]?.attributes?.title}
                                    </CardTitle>


                                    <CardText onClick={() => navigate(`/newsapp/article/${state.articles[0].id}`)} className="max_lines2">

                                        {/* {state.articles[0].attributes.description} */}

                                        <ReactMarkdown>{state.articles[0].attributes.description}</ReactMarkdown>

                                    </CardText>


                                    <Button size="sm" onClick={() => navigate(`/newsapp/author/${state.articles[0].attributes?.author?.data?.id}`)} color="light" className="feed_page_author_bar">

                                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                            {
                                                state?.articles[0]?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url ? <img className="author_img_feed_page" src={`${img_url}${state.articles[0]?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url}`} />
                                                    :
                                                    <AiOutlineUser size={40} />
                                            }
                                            <h6 className="user_name_and_status max_lines1" style={{ margin: "0px", marginLeft: "0.5rem", padding: "0px" }}>{state.articles[0].attributes?.author?.data?.attributes?.username}</h6>
                                        </span>

                                        <span className="user_name_and_status" style={{ color: "gray" }}>{calculate_days(state.articles[0].attributes.createdAt)}</span>

                                    </Button>


                                </Card>

                            </Col>


                            {state.articles?.slice(1).map((v, i) =>

                                <Col id="articles_half" key={i} sm="12">

                                    <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>
                                        <CardTitle onClick={() => navigate(`/newsapp/article/${v.id}`)} tag="h5" className="max_lines1">
                                            {v.attributes.title}
                                        </CardTitle>


                                        <CardText onClick={() => navigate(`/newsapp/article/${v.id}`)} className="max_lines2">

                                            <ReactMarkdown>{v.attributes.description}</ReactMarkdown>


                                        </CardText>


                                        <Button size="sm" onClick={() => navigate(`/newsapp/author/${v.attributes?.author?.data?.id}`)} color="light" className="feed_page_author_bar">

                                            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                                {
                                                    v.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url ?
                                                        <img className="author_img_feed_page" src={`${img_url}${v.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url}`} />
                                                        :
                                                        <AiOutlineUser size={40} />
                                                }
                                                <h6 className="user_name_and_status max_lines1" style={{ margin: "0px", marginLeft: "0.25rem", padding: "0px" }}>{v.attributes?.author?.data?.attributes?.username}</h6>
                                            </span>

                                            <span className="user_name_and_status" style={{ color: "gray" }}>{calculate_days(v.attributes.createdAt)}</span>

                                        </Button>


                                    </Card>

                                </Col>



                            )}



                        </>





                }




            </div>

        </div >
    )

}




export default App