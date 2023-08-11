import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import Background from "../assets/coverImage.png";
import Myself from "../assets/omarion.jpg";
import "./CoverImage.css"; // Import your custom CSS file

const CoverImage = () => {
  return (
    <Container className="cover-container">
      <Image className="background-image" src={Background} id="home"/>
      <div className="content-overlay">
        <Row className="cover-section">
          <Col>
            <p className="intro">
              Hello 👋 I AM Omar jUMA & AM A SOFTWARE DEVELOPER
            </p>
            <p className="intro-sub">
            I develop full-stack user friendly websites using latest tech
            </p>
          </Col>
          <Col className="myImageContainer">
            <Image className="myImage" src={Myself} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CoverImage;
