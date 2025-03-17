import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Header from "./Header";
import Bottom from "./Footer";
import Form from 'react-bootstrap/Form';
import { FaCommentDots, FaBell, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
 export function Contact(){
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const contactOptions = [
        {
          icon: <FaCommentDots size={30} />,
          title: "Chat to sales",
          description: "Speak to our friendly team.",
          linkText: "sales@untitledui.com",
          linkUrl: "mailto:sales@untitledui.com",
        },
        {
          icon: <FaBell size={30} />,
          title: "Chat to support",
          description: "We're here to help.",
          linkText: "support@untitledui.com",
          linkUrl: "mailto:support@untitledui.com",
        },
        {
          icon: <FaMapMarkerAlt size={30} />,
          title: "Visit us",
          description: "Visit our office HQ.",
          linkText: "View on Google Maps",
          linkUrl: "https://maps.google.com",
        },
        {
          icon: <FaPhone size={30} />,
          title: "Call us",
          description: "Mon-Fri from 8am to 5pm.",
          linkText: "+91 8765432134",
          linkUrl: "tel:+15550000000",
        },
      ];
    return(
        
        <div>
            <Header/>
        <div className="text-white p-1 text-center h-50px pt-5" style={{ backgroundColor: "grey",minHeight: "150px" }}>
            <h1 >Contact our friendly team</h1>
            <span>let us know how can we help</span>

        </div>
        <div className="contant-left text-end p-3">
        <Button variant="primary" className="rounded-5" onClick={handleShow}>
        complain form
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>complain</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <FloatingLabel
        controlId="floatingInput"
        label="Email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="name" label="Name" className="mb-3">
        <Form.Control type="text" placeholder="Name" />
      </FloatingLabel>
      <FloatingLabel controlId="comment" label="comment" className="mb-3">
        <Form.Control type="text" placeholder="Comment" />
      </FloatingLabel>
      <Button variant="primary" className="rounded-5">
        Submit
      </Button>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
        <div className="pt-5">
        <Container className="py-4">
      <Row className="g-4">
        {contactOptions.map((option, index) => (
          <Col key={index} xs={12} md={6} lg={3}>
            <Card className="text-center shadow-sm border-0">
              <Card.Body>
                <div className="text-primary mb-3">{option.icon}</div>
                <Card.Title>{option.title}</Card.Title>
                <Card.Text className="text-muted">{option.description}</Card.Text>
                <a href={option.linkUrl} className="text-primary fw-bold text-decoration-none">
                  {option.linkText}
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
        </div>
        <div className="p-5 text-center">
            <h2 >Frequetly asked quetions</h2>
            <span>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>How does BuyCar work?</Accordion.Header>
        <Accordion.Body>
        BuyCar is an online platform that connects buyers and sellers of new and used cars. You can browse listings, compare prices, and contact sellers directly.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Is BuyCar a car dealer?</Accordion.Header>
        <Accordion.Body>
        No, BuyCar is not a dealership. We provide a marketplace where individuals and dealerships can list and buy vehicles.
        </Accordion.Body>
      </Accordion.Item>
   
    <Accordion.Item eventKey="2">
        <Accordion.Header>Do I need to create an account to browse cars?</Accordion.Header>
        <Accordion.Body>
        No, you can browse listings without an account. However, creating an account allows you to save favorite listings, contact sellers, and receive notifications about new listings.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </span>
        </div>
      
      <Bottom/>
    </div>
    );
 }