import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Sortcourse.css";

const Shortcourse = () => {
  return (
    <div className="shortcourse">
      <h1>Our Course</h1>
      <div className="course-parent">
        <div className="left">
          <Row xs={1} md={2} className="g-5">
            <Col>
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src={
                    "https://www.skydivedelmarva.com/wp-content/uploads/2021/04/pexels-sang-adjie-6838489-1024x683.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title>Category E2</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src="https://www.skydivesouthsask.ca/images/photos_iad/iad_gallery2.jpg"
                />
                <Card.Body>
                  <Card.Title>
                    15 minutes tunnel time at Inflight Dubai{" "}
                  </Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src={
                    "https://skydivedeland.com/wp-content/uploads/learn-to-skydive-aff-collage-3-1200x800.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title>Repeat AFF jump</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow">
                <Card.Img
                  variant="top"
                  src="https://images.squarespace-cdn.com/content/v1/5ff51326eba31e69a2f4bcda/1611107372515-9N7G2ZH4QKEWPCPS0NV1/ifly-skydiving-centre-brisbane.jpg"
                />
                <Card.Body>
                  <Card.Title>Full package</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <div className="right">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Shortcourse;
