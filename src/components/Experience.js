import React from "react";
import { Container, Card, ListGroup } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "Accsys Electronics",
      duration: "Feb 2025 - Present",
      details: [`Implemented new website features including conditional logic and data filters to enhance user interactivity.Created dynamic, responsive, and interactive user interfaces (UIs) using HTML5, CSS3, Bootstrap, and JavaScript.
                Developed and maintained both frontend and backend components of web applications using PHP and JavaScript.
                Collaborated with senior developers to understand project requirements and effectively contribute to shared codebases.
                `]
    }
  ];

  return (
    <Container id="experience" className="py-5">
      <h2 className="text-center mb-4">Experience</h2>
      {experiences.map((exp, index) => (
        <Card key={index} className="mb-4 shadow-sm">
          <Card.Body>
            <Card.Title>{exp.role} - {exp.company}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{exp.duration}</Card.Subtitle>
            <ListGroup variant="flush">
              {exp.details.map((item, i) => (
                <ListGroup.Item key={i}>{item}</ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Experience;
