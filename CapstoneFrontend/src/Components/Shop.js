import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CoffeeDetails from "./CoffeeDetails";
import Form from 'react-bootstrap/Form'

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 5,
      value: "1",
      category: {
        category1: "espresso",
        category2: "filter"
      },
      isToggleOn: false,
    };

    this.onLoadMore = this.onLoadMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.onTest = this.onTest.bind(this);
  }

  onTest(event) {
    this.setState({
      value : event.target.value,
      limit : this.setState.limit = 5
    }
    );
  }

  onLoadMore() {
    this.setState((prevState) => ({
      limit: this.state.limit + 5,
    }));
  }

  handleClick(key) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
      key: key,
    }));
  }

  render() {
    let product = this.props.product;
    let length = this.props.product.length;
    let EspressoLength = this.props.product.filter((key => 
      (key.category === this.state.category.category1))).length
    let FilterLength = this.props.product.filter((key => 
        (key.category === this.state.category.category2))).length
    //details page
    if (this.state.isToggleOn) {
      return (
        <div>
          <button className="rounded-circle float-right" onClick={this.handleClick}>X</button>
          <CoffeeDetails
            warn={this.state.isToggleOn && this.state.key}
            product={this.props.product}
          />
        </div>
      );
    } else {
      //shop page    
      return (
        <div>
          <Row>
            <Col>
              <h1 className="text-uppercase">
                Best Coffees from around the world
              </h1>
            </Col>
          </Row>
          
          {/*select option*/}
          <Row>
            <Col>
              <div className="mx-auto drop">
               <Form.Control className="bg-info text-white" as="select" value={this.state.value} onChange={this.onTest}>
                <option value="1">All</option>
                <option value="2" name="espresso">Espresso</option>
                <option value="3" name="filter">Filter</option>
              </Form.Control>
              </div>
            </Col>
          </Row>
          <Row>
              {
              (this.state.value === "1") ?
                  product.slice(0, this.state.limit).map((key) => (
                    <div className="col-lg-4" key={key.id}>
                      <Card>
                        <Card.Img src={key.img} variant="top" alt={key.img} onClick={() => this.handleClick(key.id)} key={key.id}></Card.Img>
                        <Card.Body>
                          <Card.Title className="text-uppercase">{key.title}</Card.Title>
                          <Card.Text>{key.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          {key.quantity === 0 ? (
                            <small className="text-danger">Out of Stock</small>
                          ) : (
                            <small className="text-muted">{key.price[0].toFixed(2)}</small>
                          )}
                        </Card.Footer>
                      </Card>
                    </div>
                  )) 
              : (this.state.value === "2") ? 
                  product.filter(key => 
                    (key.category === this.state.category.category1)).slice(0, this.state.limit).map(filtered => 
                      (<div className="col-lg-4" key={filtered.id}>
                      <Card>
                        <Card.Img src={filtered.img} variant="top" alt={filtered.img} onClick={() => this.handleClick(filtered.id)} key={filtered.id}></Card.Img>
                        <Card.Body>
                          <Card.Title className="text-uppercase">
                            {filtered.title}
                          </Card.Title>
                          <Card.Text>{filtered.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          {filtered.quantity === 0 ? (
                            <small className="text-danger">Out of Stock</small>
                          ) : (
                            <small className="text-muted">{filtered.price[0].toFixed(2)}</small>
                          )}
                        </Card.Footer>
                      </Card>
                    </div>
                  ))             
                : (this.state.value === "3") ?
                product.filter(key => 
                  (key.category === this.state.category.category2)).slice(0, this.state.limit).map(filtered => 
                    (<div className="col-lg-4" key={filtered.id}>
                    <Card>
                      <Card.Img src={filtered.img} variant="top" alt={filtered.img} onClick={() => this.handleClick(filtered.id)} key={filtered.id}></Card.Img>
                      <Card.Body>
                        <Card.Title className="text-uppercase">
                          {filtered.title}
                        </Card.Title>
                        <Card.Text>{filtered.description}</Card.Text>
                      </Card.Body>
                      <Card.Footer>
                        {filtered.quantity === 0 ? (
                          <small className="text-danger">Out of Stock</small>
                        ) : (
                          <small className="text-muted">{filtered.price[0].toFixed(2)}</small>
                        )}
                      </Card.Footer>
                    </Card>
                  </div>
                ))
              : null}
            </Row>
            { this.state.value === "1" ? (
                this.state.limit >= length ? null : (
              <div className="m-5">
                <button
                  className="btn btn-light btn btn-outline-dark" onClick={this.onLoadMore}>
                  Load More
                </button>
              </div>
            )
          ) : this.state.value === "2" ? (
                this.state.limit >= EspressoLength ? null : (
                <div className="m-5">
                <button className="btn btn-light btn btn-outline-dark"onClick={this.onLoadMore}>
                Load More
                </button>
              </div>
                )
          ) 
            : this.state.value === "3" ? (
                this.state.limit >= FilterLength ? null : (
                <div className="m-5">
                <button className="btn btn-light btn btn-outline-dark"onClick={this.onLoadMore}>
                Load More
                </button>
              </div>
              ))
            : null 
        }
      </div>
      );
    }
  }
}

export default Shop;
