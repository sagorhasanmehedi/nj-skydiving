import React from "react";
import { Card, Col } from "react-bootstrap";

const Singelcourses = (props) => {
  console.log(props.data);
  const { title, dse, img } = props.data;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{dse}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Singelcourses;
