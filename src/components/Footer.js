import { Container, Row, Col } from "react-bootstrap";
import React from 'react';
import logo from "../assets/img/logo.svg";
// import navIcon1 from "../assets/img/nav-icon1.svg";
// import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <hr></hr>
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
            <p>
              “My Hunger for <strong>Knowledge</strong> Never Dies.”
            </p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.instagram.com/pritish_384/" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="" /></a>
                <a href="https://twitter.com/pritish_purav"target="_blank" rel="noopener noreferrer"><img src={navIcon4} alt="" /></a>
                <a href="https://github.com/pritish384"target="_blank" rel="noopener noreferrer"><img src={navIcon5} alt="" /></a>
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
            <p><span role="img" aria-label="Made with">❤️</span>by Pritish Purav</p>

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
