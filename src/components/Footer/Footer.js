import React from "react";
import "./Footer.css";

// footer section

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <p>CONTACT US</p>
        <div className="hr-line">
          <hr />
        </div>
        <div className="footer-text">
          <small> SITEMAP</small> <small>|</small> <small>PRIVACY POLICY</small>{" "}
          <small>|</small> <small>TERMS & CONDITIONS</small>
        </div>
      </div>
    </div>
  );
};

export default Footer;
