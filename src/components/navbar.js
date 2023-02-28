import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { img_url } from '../config/api';
import { logout } from "../store/counterslice"
import { AiOutlineUser } from "react-icons/ai"
import { MdArticle } from "react-icons/md"


function Example() {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.counter)
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


    const pic = state.users.filter(v => v.id == state?.currentUser?.id)[0]?.image?.formats?.large?.url



    return (



        <div style={{ width: "100%" , backgroundColor:"red" }}>
            <Navbar color="light" style={{ width: "100%" }} light>

                <NavbarBrand onClick={() => navigate("/newsapp")} className="me-auto max_lines1" style={{ margin: "0px", padding: "0px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {/* {pic ? */}

                    {/* <img className='author_img_feed_page' style={{ marginRight: "1rem" }} src={`${img_url}${pic}`} /> */}

                    <img className='' style={{ marginRight: "0.2rem" }} src="https://img.icons8.com/ios/50/null/apple-news.png" />
                    {/* : */}
                    {/* <MdArticle size={40} /> */}

                    {/* } */}
                    {/* {state?.currentUser?.username} */}
                    {"News App"}
                </NavbarBrand>


                <NavbarToggler onClick={toggleNavbar} className="me-2" />


                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>

                        {/* onClick={() => { dispatch(logout()); navigate("/newsapp") }} */}
                        <NavItem onClick={() => navigate("/newsapp")}>
                            <NavLink>
                                News Feed
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;