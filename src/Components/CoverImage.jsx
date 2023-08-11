import React from "react";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Background from "../assets/coverImage.png";
import Myself from "../assets/omarion.jpg";
import "./CoverImage.css"; // Import your custom CSS file

const CoverImage = () => {
  return (
    <Card className="bg-dark text-white cover-section" id="card">
      <Card.Img src={Background} alt="Card image" />
      <Card.ImgOverlay >
        <Row>
          <Col>
            <Card.Title className="intro">
              Hello 👋 I AM OMAR JUMA & AM A SOFTWARE DEVELOPER
            </Card.Title>
            <Card.Text className="intro-sub">
              I develop full-stack user friendly websites using latest tech
            </Card.Text>
          </Col>
          <Col style={{display:"flex", justifyContent:"center",marginTop:50}}>
            <Image className="myImage" src={Myself} />
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CoverImage;
