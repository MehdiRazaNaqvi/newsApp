



import Home from "./screen/App"
import Waitlist from "./screen/Waitlist"
import Thankyou from "./screen/Thankyou"
import Feed from "./screen/Feed"
import Article from "./screen/Article"
import Create from "./screen/Create"


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />


            <Router>
                <Routes>

                    {/* <Route element={<Home />} path="/newsapp" /> */}

                    <Route element={<Waitlist />} path="/newsapp" />
                    <Route element={<Thankyou />} path="/newsapp/thankyou" />
                    <Route element={<Feed />} path="/newsapp/feed" />
                    <Route element={<Article />} path="/newsapp/article/:id" />
                    <Route element={<Create />} path="/newsapp/create" />



                </Routes>
            </Router>


        </div>
    )

}



export default App