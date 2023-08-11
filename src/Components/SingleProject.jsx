import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import './SingleProject.css'; // Import your custom CSS file for styling if needed

const SingleProject = (props) => {
  return (
    <Col md={4} sm={6} xs={12} className="mb-4">
      <Card className="bg-light text-black project-card" >
        <Card.Img src={props.image} alt="Project Image" className="project-img" />
        <Card.Body>
          <Card.Title className="project-title">{props.name}</Card.Title>
          <Card.Text className="project-description">{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleProject;
