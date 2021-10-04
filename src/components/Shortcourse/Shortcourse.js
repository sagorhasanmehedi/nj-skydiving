import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Usedata } from "../../Usedata/Usedata";
import "./Sortcourse.css";

const Shortcourse = () => {
  // data load from custom hook
  const [data] = Usedata();
  const dataslice = data.slice(0, 4);
  // go courses button
  const histroy = useHistory();
  const gocourses = () => {
    histroy.push("/course");
  };

  // home page courses
  return (
    <div className="shortcourse">
      <div className="course-parent">
        <div className="">
          <h2>Our Courses</h2>
          <div className="left">
            <Row xs={1} md={2} className="g-5">
              {dataslice.map((course) => (
                <Col>
                  <Card className="shadow">
                    <Card.Img variant="top" src={course.img} />
                    <Card.Body>
                      <Card.Title>{course.title}</Card.Title>
                      <Card.Text>{course.dse}</Card.Text>
                      <div className="coursesbutton">
                        <button onClick={gocourses}>COURSES</button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>

        {/* form fill up section */}
        <div className="">
          <h2>Admission form</h2>
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
    </div>
  );
};

export default Shortcourse;
