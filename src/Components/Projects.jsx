import React from "react";
import { Container, Col, Row, Image, Card, CardGroup } from "react-bootstrap";
import GlassBackground from "../assets/glass.png";
import SingleProject from "./SingleProject";

const Projects = () => {
  const projects = [
    {
      name: "project1",
      description: "this is a project",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "project2",
      description: "this is a project",
      image: "https://picsum.photos/200/300",
    },
    {
      name: "project3",
      description: "this is a project",
      image: "https://picsum.photos/200/300",
    },
  ];
  return (
    <>
      <h1 style={{ margin: 100, textAlign: "center" }}>Projects Section🚀</h1>

      <Row         id="projects"
>
        {projects.map((project) => (
          <SingleProject
            name={project.name}
            description={project.description}
            image={project.image}
          />
        ))}
      </Row>
    </>
  );
};
export default Projects;
