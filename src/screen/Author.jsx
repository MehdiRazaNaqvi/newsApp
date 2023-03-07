import "../style/article.css"
import "../style/author.css"

import { Row, Col, Card, CardText, CardTitle, Button, Progress, Spinner } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { img_url } from "../config/api"
import { AiOutlineUser } from "react-icons/ai"

// import ReactMarkdown from 'https://esm.sh/react-markdown@7'

import ReactMarkdown from 'react-markdown'
import { setArticles, setAuthors } from "../store/counterslice"
import { useState, useEffect } from "react"
import axios from "axios"

import { api_url } from "../config/api"
import { toast } from "react-toastify"

const App = () => {

    const d = useParams();
    const id = d.id
    // console.log(id)

    const navigate = useNavigate()
    const state = useSelector(state => state.counter)



    const [user, setUser] = useState({})
    const [articles, setarticles] = useState([])




    const dateConvert = (dateString) => {
        const date = new Date(dateString);

        const options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        };

        const formattedDate = date.toLocaleDateString('en-US', options);
        return (formattedDate);
    }



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
        if (days >= 0 && days < 1) { return ("Today") }

        else if (days == 1) {
            return (`Yesterday`)
        }
        else {
            return (`${days} days ago`)
        }
    }



    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)



    useEffect(() => {


        setLoading(true)

        axios.get(`${api_url}/news?populate=images&populate=author&populate=author.image`)
            .then(res => {


                if (res.data?.data) {


                    dispatch(setArticles({
                        data: res.data?.data, cb: () => {

                            setarticles(state?.articles?.filter(v => v.attributes?.author?.data?.id == id))
                            setLoading(false);


                        }
                    }))



                }
                else { toast.error("Something went wrong") }
            }

            )
            .catch(err => { toast.error("Something went wrong") })


        axios.get(`${api_url}/users?populate=image`)
            .then(res => {

                dispatch(setAuthors({
                    data: res.data, cb: () => {

                        setUser(state?.users?.filter(v => v.id == id)[0])

                        setLoading(false);



                    }
                }));


            })
            .catch(err => { toast.error("Something went wrong"); })








    }, [])




    return (
        <div className="news_page_base">

            <Navbar />

            {loading ?


                <div className="article_display_base" style={{ marginBottom: "5rem" }}>
                    {

                        <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                            <img className="author_profile_pic" style={{ backgroundColor: "lightgray" }} />
                        </span>


                    }

                    <span className="author_profile_info" style={{ gap: "1rem", height: "15rem" }}>

                        <span className="author_profile_name max_lines1">



                        </span>
                        {/* <span className="author_profile_email max_lines1">{user?.email}</span> */}
                        {/* <span className="author_profile_email max_lines1 articles_length"> */}
                        <Spinner color="secondary" type="grow"></Spinner>
                        {/* </span> */}

                    </span>




                </div>

                :


                <div className="article_display_base" style={{ marginBottom: "5rem" }}>
                    {
                        user?.image?.formats?.large?.url ?
                            <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>


                                <img className="author_profile_pic" src={`${img_url}${user?.image?.formats?.large?.url}`} />

                            </span>
                            :

                            user?.image?.formats?.medium?.url ?
                                <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                    <img className="author_profile_pic" src={`${img_url}${user?.image?.formats?.medium?.url}`} />

                                </span>

                                :


                                user?.image?.formats?.small?.url ?
                                    <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                        <img className="author_profile_pic" src={`${img_url}${user?.image?.formats?.small?.url}`} />
                                    </span>

                                    :


                                    user?.image?.formats?.thumbnail?.url ?
                                        <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                            <img className="author_profile_pic" src={`${img_url}${user?.image?.formats?.thumbnail?.url}`} />
                                        </span>

                                        :

                                        <span style={{ width: "12rem", height: "12rem", border: "2px solid lightgray", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>

                                            <AiOutlineUser size={100} />
                                        </span>

                    }
                    <span className="author_profile_info" style={{ gap: "1rem", height: "15rem" }}>

                        <span className="author_profile_name max_lines1">{user?.username}</span>
                        {/* <span className="author_profile_email max_lines1">{user?.email}</span> */}
                        <span className="author_profile_email max_lines1 articles_length">{articles?.length}</span>
                        <span className="author_profile_email max_lines1">{articles.length <= 1 ? "Article" : "Articles"}</span>

                    </span>


                    <div className="author_articles_base">


                        {articles?.map((v, i) =>

                            <Col sm="12" style={{ width: "100%" }}>

                                <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>

                                    <CardTitle onClick={() => navigate(`/newsapp/article/${v?.id}/${v?.attributes?.title?.replace(/\s+/g, '-')}`)} tag="h3" className="max_lines1 news_card_heading">
                                        {v.attributes?.title}
                                    </CardTitle>


                                    <CardText onClick={() => navigate(`/newsapp/article/${v?.id}/${v?.attributes?.title?.replace(/\s+/g, '-')}`)} className="max_lines2">

                                        <ReactMarkdown className="max_lines2">{v.attributes?.description}</ReactMarkdown>


                                    </CardText>


                                    <Button size="md" onClick={() => navigate(`/newsapp/author/${v.attributes?.author?.data?.id}`)} color="light" className="feed_page_author_bar">
                                        {/* 
                                <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                                    <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                                    <h6>{state.articles[0].attributes?.author?.data?.attributes?.username}</h6>
                                </span> */}

                                        <span style={{ color: "gray", width: "100%" }}>{calculate_days(state.articles[0].attributes.createdAt)}</span>

                                    </Button>


                                </Card>

                            </Col>


                        )}




                    </div>


                </div>

            }

        </div>
    )

}




export default App