import "../style/article.css"

import { Row, Col, Card, CardText, CardTitle, Button } from "reactstrap"


import Navbar from "../components/navbar"

const App = () => {

    return (
        <div className="news_page_base">

            <Navbar />


            <div className="article_display_base">

                <h2 className="article_he   ading">MINISTRY RESERVES 25% QUOTA FOR HAJJ PILGRIMS DEPOSITING DUES IN DOLLARS</h2>

                <span className="author_info_bar_article_page">


                    <span color="light" className="feed_page_author_bar">

                        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                            <img className="author_img_feed_page" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s" alt="" />
                            <h6>Syed Mehdi Raza Naqvi</h6>
                        </span>

                        <span style={{ color: "gray" }}>Friday, February 24, 2023 at 6:46 PM</span>

                    </span>


                </span>

                <p className="article_text" style={{ margin: "0px", padding: "0px" }}>Nearly 90 million people are eligible to vote in the poll, which is unfolding as Africa’s most populous democracy grapples with a security crisis, a sluggish economy and widening poverty.

                    For the first time in Nigeria’s modern history, a third candidate has emerged to challenge the ruling All Progressives Congress (APC) and main opposition Peoples Democratic Party (PDP).
                    With Buhari stepping down after two terms in office, the APC’s Bola Tinubu, 70, a former Lagos governor and political kingmaker, says “It’s my turn” for the presidency.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus, rem maiores eum nostrum rerum quidem laboriosam magni culpa consequatur inventore eius, nulla dignissimos doloremque illum. Enim ipsa sed qui?
                    He faces a familiar rival — PDP candidate and former vice president Atiku Abubakar, 76, who is on his sixth bid for the top job.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero exercitationem perferendis beatae at, blanditiis et commodi sapiente aut magnam eum numquam totam mollitia minus consequatur maiores velit temporibus saepe optio!
                    But the emergence of a surprise third candidate appealing to young voters, Labour Party’s Peter Obi, 61, has thrown the race open for the first time since the end of military rule in 1999.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ad, libero vel maiores modi corrupti praesentium. Rerum officiis adipisci cumque totam repellendus odit inventore impedit, perspiciatis a animi, exercitationem nemo.
                    Nearly 10 million new voters registered this year, most of them under 34, representing an important bloc if they come out to vote.

                    “It is not as easy to predict as before,” said Kano State College public affairs lecturer Kabiru Sufi.</p>
            </div>

        </div>
    )

}




export default App