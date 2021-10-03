import React from "react";
import { Row } from "react-bootstrap";
import { Usedata } from "../../Usedata/Usedata";
import Singelcourses from "../Singelcourses/Singelcourses";
import "./Course.css";

const Course = () => {
  const [data] = Usedata();
  return (
    <div className="all-course">
      <h1>All Course</h1>
      <Row xs={1} md={3} className="g-5">
        {data.map((data) => (
          <Singelcourses data={data} />
        ))}
      </Row>
    </div>
  );
};

export default Course;
