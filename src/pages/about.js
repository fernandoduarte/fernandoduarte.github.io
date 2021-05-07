import React from "react"
import Layout from "../components/layout"
import {Container, Row, Col} from "react-bootstrap";
// Asset declarations
import "../assets/bootstrap-4.3.1-dist/css/bootstrap.min.css";
import aboutStyles from "./about.module.css"
import portraitAbout from "../img/portrait-about.jpg"
import email from "../assets/email-icon.svg"
import phone from "../assets/phone-icon.svg"
import link from "../assets/link-icon.svg"
import github from "../assets/github-icon.svg"

export default function About() {
    return (
        <Layout>
            <div id={aboutStyles.about}>
                <h1><i>About</i></h1>
                <div id={aboutStyles.aboutContent}>
                    {/* Self-portrait */}
                    <img
                        id={aboutStyles.portrait}
                        src={portraitAbout}
                        alt="Portrait of Fernando Duarte"/> {/* Bio text */}
                    <div id={aboutStyles.bio}>
                        <span>
                            Fernando Duarte is a Senior Economist in the Capital Markets Function at the Federal
                            Reserve Bank of New York. His main research interests are in monetary economics, inflation, asset
                            pricing, financial frictions, macroprudential policies and, more generally, the connections between macroeconomics and finance. 
                            Fernando has published some of his research in top finance journals, including the Journal of Finance. He
                            obtained his Ph.D. in Economics from MIT in 2011.
                        </span>
                        <hr/>
                        <Container>
                            <Row>
                                <Col>
                                    <div>
                                        <img class={aboutStyles.icon} src={email} alt="Email icon"/>
                                        <a className={aboutStyles.text} href="mailto:fernando.duarte@ny.frb.org">fernando.duarte@ny.frb.org</a>
                                    </div>
                                    <div>
                                        <img class={aboutStyles.icon} src={phone} alt="Phone icon"/>
                                        <span className={aboutStyles.text}>+1 (857) 928-7344</span>
                                    </div>
                                    <div>
                                        <img class={aboutStyles.icon} src={github} alt="GitHub icon"/>
                                        <a
                                            className={aboutStyles.text}
                                            href="https://github.com/fernando-duarte"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            GitHub
                                        </a>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <img class={aboutStyles.icon} src={link} alt="Link icon"/>
                                        <a
                                            className={aboutStyles.text}
                                            href="https://www.newyorkfed.org/research/economists/duarte"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            NY Fed Page
                                        </a>
                                    </div>
                                    <div>
                                        <img class={aboutStyles.icon} src={link} alt="Link icon"/>
                                        <a
                                            className={aboutStyles.text}
                                            href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=2152963"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            SSRN Author Page
                                        </a>
                                    </div>
                                    <div>
                                        <img class={aboutStyles.icon} src={link} alt="Link icon"/>
                                        <a
                                            className={aboutStyles.text}
                                            href="https://scholar.google.com/citations?user=kym0pssAAAAJ&hl=en"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            Google Scholar
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
