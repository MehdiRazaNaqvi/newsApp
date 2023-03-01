import "../style/article.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"
import { AiOutlineUser } from "react-icons/ai"




import Navbar from "../components/navbar"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { img_url } from "../config/api"
// import ReactMarkdown from 'https://esm.sh/react-markdown@7'

import ReactMarkdown from 'react-markdown'

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


            <div className="article_display_base" style={{ marginBottom:"5rem"}} >

                <h2 style={{ width: "100%" }} className="article_heading"> {article?.attributes?.title}</h2>

                <span className="author_info_bar_article_page">


                    <span color="light" className="feed_page_author_bar article_page_user_info" >

                        <span onClick={() => navigate(`/newsapp/author/${article?.attributes?.author?.data?.id}`)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                            {
                                article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url ?
                                    <img className="author_img_feed_page" src={`${img_url}${article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.large?.url}`} />
                                    :
                                    article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.medium?.url ?
                                        <img className="author_img_feed_page" src={`${img_url}${article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} />
                                        :

                                        article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.small?.url ?
                                            <img className="author_img_feed_page" src={`${img_url}${article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.small?.url}`} />
                                            :

                                            article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url ?
                                                <img className="author_img_feed_page" src={`${img_url}${article?.attributes?.author?.data?.attributes?.image?.data?.attributes?.formats?.thumbnail?.url}`} />
                                                :
                                                <AiOutlineUser size={40} />
                            }
                            <h6 style={{ margin: "0px", pading: "0px", marginLeft: "1rem" }}>{article?.attributes?.author?.data?.attributes?.username}</h6>
                        </span>

                        <span style={{ color: "gray" }}>{dateConvert(article?.attributes?.createdAt)}</span>

                    </span>


                </span>
                {article?.attributes?.images?.data &&
                    <span className="article_image_display">

                        {article?.attributes?.images?.data?.map((v, i) =>

                            v?.attributes?.formats?.large?.url ?
                                < img key={i} className="article_img" src={`${img_url}${v?.attributes?.formats?.large?.url}`} />
                                :
                                v?.attributes?.formats?.medium?.url ?
                                    < img key={i} className="article_img" src={`${img_url}${v?.attributes?.formats?.medium?.url}`} />
                                    :
                                    v?.attributes?.formats?.small?.url ?
                                        < img key={i} className="article_img" src={`${img_url}${v?.attributes?.formats?.small?.url}`} />
                                        :
                                        v?.attributes?.formats?.thumbnail?.url ?
                                            < img key={i} className="article_img" src={`${img_url}${v?.attributes?.formats?.thumbnail?.url}`} />
                                            :
                                            null
                        )}


                    </span>

                }
                <p className="article_text" style={{ margin: "0px", padding: "0px", width: "100%" }}>



                    <ReactMarkdown className="article_text">{article?.attributes?.description}</ReactMarkdown>


                </p>
            </div>

        </div>
    )

}




export default App