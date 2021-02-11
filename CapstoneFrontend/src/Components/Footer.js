import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Footer = () => {
    let facebook = "https://www.facebook.com/inailforfung/";
    let twitter = "https://twitter.com/kissmyassfreaks?lang=en";
    let instagram = "https://instagram.com/inailforfung?igshid=16bv5dsrpg8o1";
    let whatsapp = "https://wa.me/+6590030538"
    return (
        <footer>
            <div className="container-fluid">
                <Row>
                    {/*<Col>
                        <div className="m-5">
                            <h3 className="text-white">Search</h3>
                            <form action="/" method="GET">
                                <div className="input-group">
                                    <input name="text" type="text" placeholder="Enter search term" />
                                    <button className="buttonSearch" type="submit">Go</button>
                                </div>
                            </form>
                        </div>
                    </Col>*/}
                    <Col>
                        <div className="m-5">
                        <h3 className="text-white text-center">Contact Me</h3>
                        <div className="d-flex justify-content-center">   
                            <a href={facebook} target="_blank" rel="noreferrer" className="fab fa-facebook"/>
                            <a href={twitter} target="_blank" rel="noreferrer" className="fab fa-twitter"></a>
                            <a href={instagram}  target="_blank" rel="noreferrer" className="fab fa-instagram"></a>
                            <a href={whatsapp} target="_blank" rel="noreferrer" className="fab fa-whatsapp"></a>
                            {/*<a href={linkedin} target="_blank" rel="noreferrer" className="fab fa-linkedin"></a>*/}
                            </div>
                        </div>
                    </Col>
                   {/*} <Col>
                        <div className="m-5">
                            <h3 className="text-white">Sign up for newsletter</h3>
                            <form action="/" method="GET">
                                <div className="input-group">
                                    <input name="email" type="email" placeholder="Email Address"/>
                                    <button className="buttonSearch" type="submit">Join</button>
                                </div>
                            </form>
                        </div>
    </Col>*/}
                </Row>
                <Row>
                    <Col><p className="text-white text-center">inailforfung © Copyright 2021</p></Col>
                </Row>
            </div>
        </footer>
    )
}

export default Footer

