import React from "react";
import "./About.css";

// this is about section

const About = () => {
  const websitedubai = () => {
    window.location.href = "https://skydiveratings.com/";
  };

  return (
    <div className="about">
      <div className="about-lay">
        <h1>
          Skydive Ratings produces the most <br /> professional instructors in
          our industry simply <br /> because they care and take great pride in
          their <br /> own professionalism.
        </h1>
        <button onClick={websitedubai}>READ MORE </button>
      </div>
    </div>
  );
};

export default About;
