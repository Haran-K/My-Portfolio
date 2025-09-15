import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <div className="bg-light text-center p-5" id="home">
      <Container>
        <h1>Hello, I'm Hariharan K</h1>
        <p className="lead">Software Developer | React | PHP | Node.js</p>
        <Button variant="primary" href="#projects">View My Work</Button>
        <Button variant="outline-dark" href="/resume.pdf" className="ms-3">Download Resume</Button>
      </Container>
    </div>
  );
}

export default Hero;
