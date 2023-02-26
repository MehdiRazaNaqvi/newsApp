import "../style/article.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"
import { AiOutlineUser } from "react-icons/ai"


import Navbar from "../components/navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { img_url } from "../config/api"

const App = () => {

    const d = useParams();
    const id = d.id


    const navigate = useNavigate()

    const state = useSelector(state => state.counter)
    const article = state.articles.filter(v => v.id == id)[0]

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


    return (



        <div className="news_page_base">

            <Navbar />


            <div className="article_display_base">

                <h2 style={{ width: "100%" }} className="article_heading">{article?.attributes?.title}</h2>

                <span className="author_info_bar_article_page">


                    <span color="light" className="feed_page_author_bar article_page_user_info">

                        <span onClick={() => navigate(`/newsapp/author/${article?.attributes?.author?.data?.id}`)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                            {
                                article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url ?
                                    <img className="author_img_feed_page" src={`${img_url}${article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url}`} />
                                    :
                                    <AiOutlineUser size={40} />
                            }
                            <h6 style={{ margin: "0px", pading: "0px", marginLeft: "1rem" }}>{article?.attributes?.author?.data?.attributes?.username}</h6>
                        </span>

                        <span style={{ color: "gray" }}>{dateConvert(article.attributes?.createdAt)}</span>

                    </span>


                </span>

                <p className="article_text" style={{ margin: "0px", padding: "0px", width: "100%" }}>
                    {article?.attributes?.description}
                </p>
            </div>

        </div>
    )

}




export default App