import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  const projectList = [
    {
      title: "Portfolio",
      description: "A portfolio website built with React, showcasing skills, and experience in software development.",
      link: "https://hariharank.vercel.app/"
    },
    {
      title: "E-commerce Website",
      description: "A React based online store with login authentication and cart functionality.",
      link: "https://hariecom.vercel.app/"
    },
    {
      title: "To-do List",
      description: "ASimple todo list web built with HTML, CSS, Javascript.",
      link: "https://haritodo.w3spaces.com/"
    },
  ];

  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projectList.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
