import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import {id} from './NavigationBar'
import CoffeeDetails from './CoffeeDetails'

function Home(props) {
 
  const shuffleArray = () =>{
    let length  = props.product.length - 1;
    for(; length > 0; length--){
      const finalArray = Math.floor(Math.random()*(length+1));
      const temp = props.product[length];
      props.product[length] = props.product[finalArray];
      props.product[finalArray] = temp;
    }
    return props.product;
  }

  //declare a new state variable isToggleon
  const [isToggleOn, handleClick] = useState(false);
  const [myKey, handleKey] = useState();

 
  if (isToggleOn) {
    return (
      <div>
        <button className="rounded-circle float-right" onClick={()=>handleClick(!isToggleOn)}>X</button>
        <CoffeeDetails
          warn={isToggleOn && myKey}
          product={props.product}
        />
      </div>
    );
  }
  else{
  return (
    <div>
    <h2 className="h2text">Hot Products</h2>
    <Nav.Link as={NavLink} to={`/Shop/`+id[0]}><button className="btn btn-dark btn btn-outline-light">Shop All Products</button></Nav.Link>
    <CardDeck>
      {shuffleArray(props.product).slice(0,3).map((key) => (
          <Card className="col-lg-4" key={key.id}>
            <Card.Img  variant="top" src={key.img} onClick={() => {handleKey(key.id);handleClick(!isToggleOn)}}
                        key={key.id} />
            <Card.Body>
              <Card.Title className="text-uppercase">{key.title}</Card.Title>
              <Card.Text>{key.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{key.price[0].toFixed(2)}</small>
            </Card.Footer>
          </Card>
      ))}
    </CardDeck>
    </div>
    );
  }
}

export default Home;
