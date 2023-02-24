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
import { logout } from "../store/counterslice"


function Example() {



    const dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector(state => state.counter)
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (



        <div style={{ width: "100%" }}>
            <Navbar color="light" style={{ width: "100%" }} light>

                <NavbarBrand className="me-auto">
                    <img className='author_img_feed_page' style={{ marginRight: "1rem" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSaQlO7ukqmBVlJd_ToyW9nDJXU8UCmpCjGYjhK79PIA&s' />
                    {state.currentUser.username}
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="me-2" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink >Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={() => { dispatch(logout()); navigate("/newsapp") }}>
                                Logout
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default Example;