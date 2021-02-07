import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    let facebook = "https://www.facebook.com/javiercharito";
    let twitter = "https://twitter.com/?lang=en";
    let instagram = "https://www.instagram.com/javier89_98/";
    let linkedin = "https://sg.linkedin.com/in/chi-chao-see-43b60738";
    return (
        <footer>
            <div className="container-fluid">
                <Row>
                    <Col>
                        <div className="m-5">
                            <h3 className="text-white">Search</h3>
                            <form action="/" method="GET">
                                <div className="input-group">
                                    <input name="text" type="text" placeholder="Enter search term" />
                                    <button className="buttonSearch" type="submit">Go</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                        <h3 className="text-white text-center">Contact Us</h3>
                        <div className="d-flex justify-content-center">   
                            <a href={facebook} target="_blank" rel="noreferrer" className="fab fa-facebook"/>
                            <a href={twitter} target="_blank" rel="noreferrer" className="fab fa-twitter"></a>
                            <a href={instagram}  target="_blank" rel="noreferrer" className="fab fa-instagram"></a>
                            <a href={linkedin} target="_blank" rel="noreferrer" className="fab fa-linkedin"></a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="m-5">
                            <h3 className="text-white">Sign up for newsletter</h3>
                            <form action="/" method="GET">
                                <div className="input-group">
                                    <input name="email" type="email" placeholder="Email Address"/>
                                    <button className="buttonSearch" type="submit">Join</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><p className="text-white text-center">J's Coffee © Copyright 2020</p></Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer

