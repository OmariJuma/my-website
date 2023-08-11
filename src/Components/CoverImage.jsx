import React from "react";
import { Container, Col, Row, Image, Card } from "react-bootstrap";
import Background from "../assets/coverImage.png";
import Myself from "../assets/omarion.jpg";
import Styles from "./CoverImage.module.css"; // Import your module CSS file

const CoverImage = () => {
  return (
    <Card className={`bg-dark text-white ${Styles.coverSection}`} id="home">
      <Card.Img src={Background} alt="Card image" />
      <Card.ImgOverlay>
        <Row>
          <Col>
            <Card.Title className={Styles.intro}>
              Hello 👋 I AM OMAR JUMA & AM A SOFTWARE DEVELOPER
            </Card.Title>
            <Card.Text className={Styles.introSub}>
              I develop full-stack user friendly websites using latest tech
            </Card.Text>
          </Col>
          <Col style={{display:"flex", justifyContent:"center"}}>
            <Image className={Styles.myImage} src={Myself} />
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CoverImage;
