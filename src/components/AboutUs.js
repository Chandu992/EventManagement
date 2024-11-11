import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <>
     
      <style>{`
        .about-us-card-img {
          width: 90%;
          height: 170px; /* Adjust height */
          object-fit: cover; /* Ensures the image doesn't stretch */
        }

        .about-us-page .text-center {
          margin-bottom: 30px;
        }

        .about-us-page .display-4 {
          font-size: 2.5rem;
          font-weight: bold;
        }

        .about-us-page .lead {
          font-size: 1.2rem;
          color: #555;
        }

        .about-us-page .card-body {
          padding: 20px;
        }

        .about-us-page .card-title {
          font-size: 1.5rem;
          color: #333;
        }

        .about-us-page .card-text {
          font-size: 1rem;
          color: #666;
        }

        .about-us-page .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }

        .about-us-page .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }

        .my-4 {
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
      `}</style>

      <Container className="about-us-page my-5">
        <Row className="text-center">
          <Col>
            <h1 className="display-4">About Us</h1>
            <p className="lead">
              We are a team of passionate individuals dedicated to bringing you the best event management platform.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLig1H5cfDbpeQEeeMn1zGuHLRJZ87Y-GT2w&s"
                className="about-us-card-img"
              />
              <Card.Body>
                <Card.Title>Our Mission</Card.Title>
                <Card.Text>
                  Our mission is to provide an easy-to-use event management system that helps users organize and participate in events effortlessly.
                </Card.Text>
                <Button variant="primary">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://lh3.googleusercontent.com/proxy/3dQs1-cO5pBwHuttzXRXUFsG6I1Nv0lvc0HkFJ9zxqS4HDML9sqZT6ck7wzJagLx9knkxvbf_Y5j3fDRXRF0it9RCfOJxzljQf5gqbDe-8MEeSONrj0ab2i1NGO-m_P9GHJ7VQ"
                className="about-us-card-img"
              />
              <Card.Body>
                <Card.Title>Our Values</Card.Title>
                <Card.Text>
                  We believe in transparency, innovation, and user satisfaction. We are committed to making event management simple and efficient.
                </Card.Text>
                <Button variant="primary">Discover Our Values</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://delhipedia.com/wp-content/uploads/2021/03/vaccine_delhi_sat_660_170121092818.jpg"
                className="about-us-card-img"
              />
              <Card.Body>
                <Card.Title>Our Team</Card.Title>
                <Card.Text>
                  We are a diverse group of designers, developers, and event enthusiasts working together to create a seamless user experience.
                </Card.Text>
                <Button variant="primary">Meet the Team</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </Container>
    </>
  );
};

export default AboutUs;
