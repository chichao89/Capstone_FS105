import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Nav } from 'react-bootstrap';
import {NavLink } from 'react-router-dom'
import {id} from './NavigationBar'

function Cart() {
              
              let cartItem = JSON.parse(localStorage.getItem('original')) || []
              let total = 0;
              let output = [];
              if (cartItem.length !== 0)
              { output =cartItem.reduce((sum,record) => {
                let data = sum.findIndex((e)=>e.id===record.id);
                if(data===-1){
                  sum.push({id: record.id, finalAmt: record.finalAmt, finalQty:record.finalQty,img:record.img,title:record.title});
                } 
                else{ 
                  sum[data].finalAmt += (record.finalAmt);
                  sum[data].finalQty += (record.finalQty);
                  }
                  return sum
                  }, []);
                  
                  total = output.reduce((final, {finalAmt})=> final + finalAmt,0)
              }  
                              
              if(cartItem.length === 0)
              {
                     return (
                            <div className="container-height text-center">
                              <Row>
                                <Col className="border border-primary">                             
                                   <h1>Your Cart is currently empty</h1>
                                </Col>
                              </Row>
                              <Row>
                              <Nav.Link className="mx-auto mw-25 w-25 p-5" as={NavLink} to={`/Shop/`+id[0]}><button className="btn btn-dark btn btn-outline-light">Back To Shop</button></Nav.Link>
                              </Row>
                            </div>
                     )
              }
              else{
                     return (
                       <div>
                       <Row className="border border-primary p-2">
                               <Col md={2} xs={12} className="p-1"></Col>
                               <Col md={4} xs={12} className="p-3 mx-auto text-left">Product</Col>
                               <Col md={3} xs={12} className="p-3 mx-auto text-center">Quantity</Col>
                               <Col md={3} xs={12} className="p-3 mx-auto text-center">Price</Col>
                        </Row>                     
                        {output.map((key) => (
                           <div key={key.id}>
                             <Row className="border border-primary p-2">
                               <Col md={2} xs={12} className="p-3 clearfix visible-xs-block">
                                 <img className="w-50 mh-50" src={key.img} alt={key.img} />
                               </Col>
                               <Col md={4} xs={12} className="py-5 mx-auto  text-left">{key.title}</Col>
                               <Col md={3} xs={12} className="py-5 mx-auto  text-center">{key.finalQty}</Col>
                               <Col md={3} xs={12} className="py-5 mx-auto  text-center">{key.finalAmt.toFixed(2)}</Col>
                             </Row>
                           </div>
                         ))
                         }
                         <Row className="p-2">
                           <Col className="text-right"><h1>Cart Total</h1></Col>
                         </Row> 
                         <Row className="w-25 float-right">
                             <Col md={true} xs={true} className="border border-primary "><h4>SubTotal</h4></Col>
                             <Col md={true} xs={true} className="border border-primary p-2">${total.toFixed(2)}</Col>
                           </Row>
                       </div>
                     );
              }
     
            
}
export default Cart

