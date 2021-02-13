import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <Row>
        <Col>
          <h1 className="text-uppercase">Booking</h1>
        </Col>
      </Row>
      <Row>
        <Col sm>
        <div className="d-flex flex-column">
          <h3 className="text-uppercase">Select Date</h3>
          <div>
          <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              fixedHeight
              inline
            />
        </div>
        </div>
        </Col>    
        <Col sm>
          <h3 className="text-uppercase">Select Time</h3>
        </Col>
      </Row>
    </div>
  );
}

export default Booking;
