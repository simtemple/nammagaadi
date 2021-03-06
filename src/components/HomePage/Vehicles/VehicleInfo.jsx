import React from "react";
import { Col, Table, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function VehicleInfo(props) {
  return (
    <Col xs={12} md={4} lg={3}>
      <Card style={{ width: '14rem', backgroundColor: "#A4D4AE", margin: "0 auto 1rem auto" }}>
        <Card.Img variant="top" src={props.img} height="200rem" />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Table size="sm" style={{ margin: "auto" }}>
            <tbody>
              <tr><td>Capacity</td><td>{props.capacity}</td></tr>
              <tr><td>Starts from</td><td>{props.price}*</td></tr>
            </tbody>
          </Table>
          <p style={{ fontSize: '12px', marginTop: '5px' }}>*Base price covers a minimum distance. Please contact us for accurate rates.</p>
          <Link to={{
            pathname: '/order',
            linkState: { vehicleType: props.name }
          }}>
            <Button type="submit" variant="success" style={{ marginTop: "15px" }}>Book Now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default VehicleInfo;
