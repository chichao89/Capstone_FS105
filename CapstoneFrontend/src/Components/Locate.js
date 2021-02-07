import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
//import { Map, GoogleApiWrapper } from 'google-maps-react';


class Locate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error : null,
            isLoaded : false,
            weatherData : []
        }
    }


    async componentDidMount() {
    
        await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Singapore&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`)
            .then(response =>  response.json())
            .then(
                (result) => {
                    //console.log(result)
                    const { name } = result;
                    const { country } = result.sys;
                    const { temp } = result.main;
                    const { description, icon } = result.weather[0];
                    this.setState({
                        isLoaded: true,
                        weatherData: {
                            name,
                            country,
                            temp : temp.toFixed(1),
                            description,
                            icon
                        }
                    })
                    //console.log(this.state.weatherData)                
                },
                (error) => {
                    this.setState({
                      isLoaded: true,
                      error
                });
            });
    }

    render() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date().getDay()
        let dayName = days[date]
        return (
            <div>
               <section><h1 className="text-uppercase">Where are we?</h1></section>
               <section className="w-100 mx-auto">
                   <h4 className="text-muted locateS text-center">We are located at Orchard,Jewel and Jurong East. With 3 branches opened, you can indulged yourself with a cup of delicious coffee.
                   </h4>
               </section>
               <Row className="m-5">
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture4.png" alt="J's Orchard Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Orchard Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Have a sip of your favourite coffee and relax with the wonderful sights</p></div>
                <div className="m-3">
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-store"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>Mon - Sun: 10AM to 10:30PM</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-map-pin"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>2 Orchard Turn, #03-12, Singapore 238801</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture5.png" alt="J's Jewel Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Jewel Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Take a break while having a sip of Coffee and soak in the atmosphere of this amazing bar</p></div>
                <div className="m-3">
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-store"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>Mon - Sun: 10AM to 10:30PM</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-map-pin"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>80 Airport Blvd, #03 - 214, Singapore 819666</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col lg={true}><div className="leftToRight"><img className="none" src="About/picture6.png" alt="J's Jurong Bar"/>
                <div className="m-3"><h4 className="text-uppercase">J's Jem Bar</h4></div></div>
                <div className="m-3"><p className="small text-left">Journey to the West at JEM and immerse yourself into the Coffee Magic World</p></div>
                <div className="m-3">
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-store"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>Mon - Sun: 10AM to 10:30PM</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="border border-dark">
                            <div className="col-lg-2 float-left">
                                <i className="fas fa-map-pin"></i>
                            </div>
                            <div className="row-lg-1 text-left">
                            <p>50 Jurong Gateway Rd, #01-04,Singapore 608549</p>
                            </div>
                        </div>
                        </Col>
                    </Row>
                </div>
                </Col>
               </Row> 
                <Row>
                <Col>
                <div><p>{dayName}: {this.state.weatherData.temp}°C, {this.state.weatherData.description}, <img src={`http://openweathermap.org/img/wn/${this.state.weatherData.icon}.png`} alt="weathericon"/></p></div>
                <section>
                <MapContainer center={[1.34, 103.85]} zoom={12} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[1.3039, 103.8320]}>
                            <Popup className="text-uppercase">
                            <p>J'S Orchard Bar</p>
                            <p>2 Orchard Turn, #03-12, Singapore 238801</p>
                            <p>Contact us at +65 6238 8228</p>
                            </Popup>
                        </Marker>
                        <Marker position={[1.3602, 103.9898]}>
                            <Popup className="text-uppercase">
                            <p>J'S Jewel Bar</p>
                            <p>80 Airport Blvd, #03 - 214, Singapore 819666</p>
                            <p>Contact us at +65 6956 9898</p>
                            </Popup>
                        </Marker>
                        <Marker position={[1.3328,103.7433]}>
                            <Popup className="text-uppercase">
                            <p>J'S Jem Bar</p>
                            <p>50 Jurong Gateway Rd, #01-04,Singapore 608549</p>
                            <p>Contact us at +65 6225 5536</p>
                            </Popup>
                        </Marker>
                        </MapContainer>
                </section>
                </Col>
                </Row>
            </div>
        )
    }
}

export default Locate
