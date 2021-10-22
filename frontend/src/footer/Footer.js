import React from "react";
import {Container} from "react-bootstrap";
import logo from "../common/logo.svg"


const year = new Date().getFullYear()

export default function Footer () {
    return (
        <div>
            <Container>

                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-5">
                        <p className="col-md-4 mb-0 text-muted">© {year} Company, Inc</p>
                        <a href="/"
                           className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">

                                <img
                                    src={logo}
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="IB"
                                    align="center"
                                />

                        </a>
                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                            <li className="nav-item"><a href="/about" className="nav-link px-2 text-muted">Sobre Nós</a></li>
                        </ul>
                    </footer>
            </Container>
        </div>
    )
}