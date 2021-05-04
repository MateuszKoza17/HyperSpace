import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h3>Email Us</h3>
            <a className="e-mail" href="#">
              hyperspace@mailto.com
            </a><br></br>
            <small>Mateusz Koza</small>
          </Col>
          <Col className="links-col">
            <h5>Links</h5>
            <div className="links">
              <ul>
                <li>About Us</li>
                <li>NASA News</li>
                <li>CLA Celebrate</li>
              </ul>
            </div>
          </Col>
          <Col className="follow-col">
          <div className="footer-element">
            <div>
              <h5>Follow Us</h5>
              <a href="https://www.facebook.com/"><span class="fab fa-facebook-f"></span></a>
              <a href="https://www.youtube.com/"><span class="fab fa-youtube"></span></a>
              <a href="https://twitter.com/?lang=pl"><span class="fab fa-twitter"></span></a>
              <a href="https://pl.linkedin.com/"><span class="fab fa-linkedin-in"></span></a>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Footer;
