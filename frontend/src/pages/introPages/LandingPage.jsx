// src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  Container,
  Button,
  Row,
  Col,
  Card,
  Carousel,
} from 'react-bootstrap';

const LandingPage = () => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "WebApplication",
    "name": "Keyboard Bilingual",
    "url": "https://yourwebsite.com",
    "description": "Learn new keyboard layouts effortlessly while keeping your current typing skills intact.",
    "author": {
      "@type": "Organization",
      "name": "Your Company Name",
    },
  };

  return (
    <div className="landing-container">
      {/* Navigation Bar */}
      {/* <Navbar expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#" className="navbar-logo">
            Keyboard Bilingual
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-links">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#footer">Contact</Nav.Link>
              <Link to="/signup" className="btn btn-primary nav-btn">
                Get Started
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}

      {/* Hero Section */}
      <Container fluid className="hero-section">
        <Container className="hero-content">
          <h1 className="hero-heading">Master Any Keyboard Layout Without Losing Your Touch</h1>
          <p className="hero-subheading">
            Learn new keyboard layouts effortlessly while keeping your current typing skills intact.
          </p>
          <Link to="/signup" className="btn btn-primary cta-button">
            Start Your Journey
          </Link>
        </Container>
      </Container>

      {/* Features Section */}
      <section id="features" className="features-section">
        <Container>
          <h2 className="section-title">Why Choose Keyboard Bilingual?</h2>
          <Row className="features-grid">
            {features.map((feature, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="feature-card">
                  <div className={`feature-icon icon-${index + 1}`}></div>
                  <Card.Body>
                    <Card.Title className="feature-title">{feature.title}</Card.Title>
                    <Card.Text className="feature-description">{feature.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <Container>
          <h2 className="section-title">What Our Users Say</h2>
          <Carousel className="testimonial-carousel">
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Card className="testimonial-card">
                  <div className="testimonial-avatar">{testimonial.author.charAt(0)}</div>
                  <Card.Body>
                    <Card.Text className="testimonial-text">"{testimonial.text}"</Card.Text>
                    <Card.Title className="testimonial-author">- {testimonial.author}</Card.Title>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* Footer Section */}
      <footer id="footer" className="footer">
        <Container>
          <p>&copy; 2024 Keyboard Bilingual. All rights reserved.</p>
          <Link to="/signup" className="btn btn-primary cta-button">
            Try It Free
          </Link>
        </Container>
      </footer>
    </div>
  );
};

const features = [
  { title: 'Dual Proficiency', description: 'Master a new keyboard layout without forgetting the old one.' },
  { title: 'Flexible Learning', description: 'Practice any keyboard style on your existing hardware.' },
  { title: 'Seamless Transition', description: 'Switch between layouts effortlessly as you become more comfortable.' },
  { title: 'Customizable Lessons', description: 'Tailor your learning experience with personalized lessons.' },
  { title: 'Interactive Exercises', description: 'Engage with fun and challenging exercises to build muscle memory.' },
  { title: 'Progress Tracking', description: 'Monitor your improvement with detailed statistics and milestones.' },
];

const testimonials = [
  { text: 'Keyboard Bilingual helped me master Colemak in weeks!', author: 'John D.' },
  { text: 'The customizable lessons are a game changer.', author: 'Sarah P.' },
  { text: 'My typing speed and accuracy improved significantly.', author: 'Emily R.' },
];

export default LandingPage;
