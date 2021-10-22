import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./Header.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header() {
    return (
        <div>
            <Navbar bg="ib" variant="dark" expand="lg" collapseOnSelect={true}>
            <Container>
                <Navbar.Brand as={Link} to={'/'}>
                    <img
                        src={logo}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"
                        alt="IB"
                        align="center"
                    />{' '}
                    Investing Brasil
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id={'responsive-navbar-nav'}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="mainnav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Sobre nós</a>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
