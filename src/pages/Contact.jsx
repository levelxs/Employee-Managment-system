import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      

      {/* HEADER */}
      <div className="bg-secondary text-light py-5">
        <Container>
          <h1 className="fw-bold text-center">Contact Us</h1>
          <p className="text-center mt-2">
            We’re here to help with your employee management needs
          </p>
        </Container>
      </div>

      {/* CONTACT CONTENT */}
      <Container className="py-5">
        <Row className="g-4">
          {/* CONTACT INFO */}
          <Col md={5}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">
                  Get in Touch
                </Card.Title>
                <p className="text-muted">
                  Have questions about the Employee Management System or need
                  support? Reach out to us using the details below.
                </p>

                <p className="mb-2">
                  <strong>Email:</strong> support@ems.com
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> +1 234 567 890
                </p>
                <p className="mb-2">
                  <strong>Office:</strong> 123 Corporate Avenue, Business City
                </p>

                <p className="text-muted mt-3">
                  Our support team is available Monday to Friday, 9:00 AM –
                  6:00 PM.
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* CONTACT FORM */}
          <Col md={7}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold mb-3">
                  Send Us a Message
                </Card.Title>

                <Form>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group controlId="name">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                        />
                      </Form.Group>
                    </Col>

                    <Col md={6}>
                      <Form.Group controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Subject"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Write your message here..."
                    />
                  </Form.Group>

                  <Button variant="dark" size="lg" type="submit">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <small>
          © {new Date().getFullYear()} Employee Management System. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default Contact;
