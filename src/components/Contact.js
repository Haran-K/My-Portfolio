import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_qwnbhlr",   
      "template_0y6hbjs",  
      form.current,
      "FbxLDh0-uSsQnAF9c"    
    ).then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Try again later.");
      }
    );
  };

  return (
    <Container id="contact" className="py-5 bg-light">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail} className="mx-auto" style={{ maxWidth: "600px" }}>
        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter your email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={4} placeholder="Enter your message" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </Container>
  );
}

export default Contact;
