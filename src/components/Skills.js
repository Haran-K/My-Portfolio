import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";

function Skills() {
  const skills = [
    { name: "React.js", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "PHP", level: 75 },
    { name: "SQL", level: 70 },
    { name: "Node.js", level: 65 }
  ];

  return (
    <Container id="skills" className="py-5 bg-light">
      <h2 className="text-center mb-4">Skills</h2>
      <Row>
        {skills.map((skill, index) => (
          <Col md={6} key={index} className="mb-3">
            <h6>{skill.name}</h6>
            <ProgressBar now={skill.level} label={`${skill.level}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
