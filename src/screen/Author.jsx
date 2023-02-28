import "../style/article.css"
import "../style/author.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"


import Navbar from "../components/navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { img_url } from "../config/api"
import { AiOutlineUser } from "react-icons/ai"

import ReactMarkdown from 'https://esm.sh/react-markdown@7'




const App = () => {

    const d = useParams();
    const id = d.id
    // console.log(id)

    const navigate = useNavigate()
    const state = useSelector(state => state.counter)
    const user = state.users.filter(v => v.id == id)[0]
    const articles = state.articles.filter(v => v.attributes?.author?.data?.id == id)


    console.log(user)

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
        if (days == 0) { return ("today") }

        else {
            return (`${days} days ago`)
        }
    }





    return (
        <div className="news_page_base">

            <Navbar />


            <div className="article_display_base">
                {
                    user.image?.formats?.large?.url ?
                        <img className="author_profile_pic" src={`${img_url}${user.image?.formats?.large?.url}`} />
                        :
                        <AiOutlineUser size={100} />

                }
                <span className="author_profile_info">

                    <span className="author_profile_name max_lines1">{user?.username}</span>
                    <span className="author_profile_email max_lines1">{user?.email}</span>
                </span>


                <div className="author_articles_base">


                    {articles.map((v, i) =>
                        <Col sm="12">

                            <Card style={{ height: "15rem", display: "flex", flexDirection: "column", gap: "1rem", justifyContent: "center" }} body>

                                <CardTitle onClick={() => navigate(`/newsapp/article/${v.id}`)} tag="h5" className="max_lines1">
                                    {v.attributes?.title}
                                </CardTitle>


                                <CardText onClick={() => navigate(`/newsapp/article/${v.id}`)} className="max_lines2">

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

        </div>
    )

}




export default App