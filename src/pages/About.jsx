import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


const About = () => {
  return (
    <>
      

      {/* HEADER */}
      <div className="bg-dark text-light py-5">
        <Container>
          <h1 className="fw-bold text-center">About Our System</h1>
          <p className="text-center mt-2">
            Smart solutions for modern workforce management
          </p>
        </Container>
      </div>

      {/* ABOUT CONTENT */}
      <Container className="py-5">
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h2 className="fw-bold">What is Employee Management System?</h2>
            <p className="text-muted mt-3">
              The Employee Management System (EMS) is a centralized platform
              designed to help organizations manage employee data, attendance,
              departments, and performance efficiently.
            </p>
            <p className="text-muted">
              Our system simplifies HR operations by reducing manual work,
              improving accuracy, and providing actionable insights for better
              decision-making.
            </p>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="About EMS"
              className="img-fluid"
              style={{ maxHeight: "280px" }}
            />
          </Col>
        </Row>

        {/* MISSION, VISION, VALUES */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">Our Mission</Card.Title>
                <Card.Text className="text-muted">
                  To empower organizations with efficient tools that simplify
                  workforce management and enhance productivity.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">Our Vision</Card.Title>
                <Card.Text className="text-muted">
                  To become a reliable and scalable employee management solution
                  trusted by businesses of all sizes.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">Our Values</Card.Title>
                <Card.Text className="text-muted">
                  Transparency, efficiency, security, and continuous
                  improvement in everything we build.
                </Card.Text>
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

export default About;
