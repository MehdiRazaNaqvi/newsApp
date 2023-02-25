import "../style/article.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"


import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const App = () => {

    const d = useParams();
    const id = d.id



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


                    <span color="light" className="feed_page_author_bar">

                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                            <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                            <h6>{article?.attributes?.author?.data?.attributes?.username}</h6>
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