import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Story() {
    return (
        <div>
            <Row>
                <Col>
                <div><h1>J's Coffee History</h1></div>
                <div><h5>Passion, Quality and Service</h5></div>
                </Col>
                <Row className="bg-light p-3">
                <Col lg={true}>
                <div id="parent" className="rounded"><img className=" rounded none" src ="About/picture1.png" alt="About Me"/></div>
                <h5>Go closer!</h5>
                </Col>
                <Col lg={true}>
                <div className="w-75 m-5">
                    <h5>Background</h5>
                    <p className="text-justify font-italic aboutme">There's no better start to the day than a fresh-brewed mug of the dark stuff, perfectly companioned while reading the paper or a good book. There's no better afternoon pick-me-up to beat that 3 o'clock slump—with a steaming hot mug of coffee with the perfect amount of cream and sugar is the ideal way to end the day. That's why here with J's Coffee, we combine the ambience of your Home, the perfect solitude of grabbing your perfectly brewed with accompanying sweets and treats of your choice.</p></div>
                </Col>
                </Row>
                <Row className="bg-light p-3">
                    <Col lg={true}>
                    <div className="w-75 m-5">
                    <h5>Dream</h5>
                    <p className="text-justify font-italic aboutme">J's Coffee started as a dream from his Grandpa's kitchen. His Grandpa' famous (3) three words to start the day - "But first coffee~ and thats how young Javier was introduced to the magic of coffee. His Grandpa's love for coffee had robbed on him and since then he always had a look out for good brewed coffee. He realized more time should be taken and effort be made to master the perfect brew, refine the taste and explore the different ways in which coffee or tea could be enjoyed.And that is when He started J's Coffee 6 years ago with 3 locations in Singapore.</p>
                    </div>
                    </Col>
                    <Col lg={true}>
                    <div>
                        <img className="w-75 rounded none" src="About/picture2.png" alt="My Shop"/><div className="p-5"><strong className="lead">Awarded Excellence In Cade Chain and Emerging Cafe Chain of the year, solidified J's Coffee in the industry.</strong></div>
                    </div>
                    </Col>
                </Row>
                <Row className="bg-light p-3">
                <Col lg={true}>
                <div><img className="w-75 rounded none" src ="About/picture3.png" alt="About Me"/></div>
                <div className="p-5"><strong className="lead">Straight from the farm to the shop & bar!</strong></div>
                </Col>
                <Col lg={true}>
                <div className="w-75 m-5">
                    <h5>Roastery</h5>
                    <p className="text-justify font-italic aboutme">At the start the bar was a bit more ‘oldschool’ than it is today. Simple equipment and less specialized menu. All that quickly changed when we discovered the world of coffee beans and their producers. We started buying small amounts of beans, roasting them per 2 kg for the bar and selling them to the customers. As the demand for specialty coffee became higher, we soon outgrew this way of working and finally acquired the roastery here in Brazil. Together with the roastery the shop grew with a flourish. We aim to do our utmost to get the best out of each cup every day for the passionate Coffee lovers!</p></div>
                </Col>
                </Row>
                <Row className="bg-light p-3">
                </Row>
            </Row>
        </div>
    )
}

export default Story
