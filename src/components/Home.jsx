import React from "react";
import {NavLink} from 'react-router-dom'
import { Container, Row, Col, Button, Card } from "react-bootstrap";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="bg-dark text-light py-5">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold">
                Employee Management System
              </h1>
              <p className="mt-3 text-muted">
                Manage employees, departments, and performance efficiently
                from one centralized platform.
              </p>
              <Button variant="light" size="lg" className="me-3">
                <NavLink className='nav-link'to='/Login'>Gets started</NavLink>
              </Button>
              <Button variant="outline-light" size="lg">
                <NavLink className='nav-link' to='/about'>Learn More</NavLink>
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/942/942748.png"
                alt="Employee Management"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* FEATURES SECTION */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-4">
          Key Features
        </h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">
                  Employee Records
                </Card.Title>
                <Card.Text className="text-muted">
                  Maintain complete employee profiles including personal,
                  professional, and payroll information.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">
                  Attendance Tracking
                </Card.Title>
                <Card.Text className="text-muted">
                  Track employee attendance, leaves, and working hours
                  accurately and effortlessly.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title className="fw-semibold">
                  Performance Management
                </Card.Title>
                <Card.Text className="text-muted">
                  Monitor employee performance and generate reports to support
                  better decision-making.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* CTA SECTION */}
      <div className="bg-light py-5">
        <Container className="text-center">
          <h3 className="fw-bold">
            Simplify Your Workforce Management
          </h3>
          <p className="text-muted mt-2">
            Designed for HR teams and managers to work smarter, not harder.
          </p>
          <Button variant="dark" size="lg">
            <NavLink className='nav-link' to='/login'>Start Managing Employees</NavLink>
          </Button>
        </Container>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <small>
          © {new Date().getFullYear()} Employee Management System. All rights reserved.
        </small>
      </footer>
    </>
  );
};

export default Home;
