import React from "react"
import {Helmet} from "react-helmet"
import {Nav, Navbar} from "react-bootstrap";
// Asset declarations
import "../assets/bootstrap-4.3.1-dist/css/bootstrap.min.css";
import layoutStyles from "./layout.module.css"
import favicon from "../assets/favicon.ico"
import portraitSidebar from "../assets/portrait-sidebar.jpg"

export default function Layout({children}) {
    return (
        <div>
            {/* Page metadata */}
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Fernando Duarte</title>
                <link href={favicon} rel="icon"/>
            </Helmet>
            {/* Sidebar - title and navigation */}
            <div id={layoutStyles.sidebar}>
                <img
                    id={layoutStyles.portrait}
                    src={portraitSidebar}
                    alt="Portrait of Fernando Duarte"/>
                <Navbar collapseOnSelect expand="md" bg="light">
                    <Navbar.Brand href="/">
                        <h1>FERNANDO DUARTE</h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <nav id="navigation">
                                <Nav.Link href="/about/">ABOUT</Nav.Link>
                                <Nav.Link href="/">RESEARCH</Nav.Link>
                                <Nav.Link href="/socialMedia/">SOCIAL MEDIA</Nav.Link>
                                <Nav.Link href="https://github.com/fernandoduarte/fernandoduarte.github.io/raw/source/src/files/duarte-cv.pdf" target="_blank" rel="noopener noreferrer">CV</Nav.Link>
                            </nav>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            {/* Content display for each page */}
            <div id={layoutStyles.content}>
                {children}
            </div>
        </div>
    )
}
