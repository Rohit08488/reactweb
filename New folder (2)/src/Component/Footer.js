import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Bottom() {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="gy-4">
          <Col md={4}>
            <h5>About BuyCar</h5>
            <p>
              BuyCar is your trusted marketplace for buying and selling cars
              with ease. We connect buyers with verified dealers to ensure the
              best deals.
            </p>
          </Col>

        
          <Col md={2}>
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="/Aboutus" className="text-light">About Us</Nav.Link>
              <Nav.Link href="/cars" className="text-light">Browse Cars</Nav.Link>
              <Nav.Link href="/sell" className="text-light">Sell Your Car</Nav.Link>
              <Nav.Link href="/contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>

          
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>Email: support@buycar.com</p>
            <p>Phone: +1 234 567 890</p>
            <p>Location: 123 Car Street, NY, USA</p>
          </Col>

          
          <Col md={3} className="text-md-end">
            <h5>Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://facebook.com" className="text-light fs-4">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-light fs-4">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light fs-4">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-light fs-4">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>

        <hr className="border-secondary" />

        
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} BuyCar. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Bottom;
