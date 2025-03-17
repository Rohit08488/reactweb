import Header from "./Header";
import Bottom from "./Footer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Aboutus(){
    return(
        <div>
            <Header/>
            <div className="row justify-content-center align-items-center bg-secondary text-white text-center d-flex" style={{ height: "15vh" }}>
                
                <h2 className="m-0">ABOUT US</h2>
                
            </div>
            <div className="conatiner py-3 ">
            <div className="row justify-content-center">
            <div className="col-4 text-center">
            <h4>At BuyCar, we make buying and selling cars safe, simple, and hassle-free.</h4>
            <p>Whether you're looking for your dream car or want to sell your old one at the best price, we've got you covered. Our platform connects verified buyers and sellers, ensuring secure transactions with complete transparency. With AI-powered car valuations, instant offers, and expert assistance, we help you make informed decisions. Plus, our trusted payment system and certified vehicle checks guarantee a worry-free experience. At BuyCar, we don’t just trade cars—we build trust. 🚗💨</p>
            </div>
            </div>
            </div>
            <br></br><br></br>
            <Container>
      <Row>
        <Col sm={3}><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.samglobaluniversity.ac.in/wp-content/uploads/2024/02/our-mission-1170x700-min.jpg" />
        </Card></Col>
        <Col sm={9}>
        <div className="text-start">
        <h4 className="fw-bold">Our Mission</h4>
        <p>
        At BuyCar, our mission is to empower individuals with a seamless and secure car buying and selling experience. We strive to connect buyers and sellers through a trusted, transparent, and hassle-free platform. Our goal is to make car ownership accessible, whether you're searching for your dream car or looking to sell one at the best value. With a focus on reliability, innovation, and customer satisfaction, we offer expert guidance, verified listings, and secure transactions. At BuyCar, we believe that finding the right car should be as exciting and effortless as driving it. 
         </p>
        
      </div>
      </Col>
      </Row><br/><br/><br/><br/><br/><br/>
      <Row>
      <Col sm={9}> <div className="text-end">
        <h4 className="fw-bold">Our Story</h4>
        <p className="text-start">
        At BuyCar, it all started with a simple idea: buying and selling cars should be easy, secure, and hassle-free. Born from a passion for automobiles and a vision to simplify the car trading experience, BuyCar was founded in 2024 to bridge the gap between buyers and sellers. Frustrated by the complexities of traditional car dealerships and unreliable listings, we set out to create a platform that offers transparency, trust, and convenience. Whether you're looking for your dream car or selling one at the best value, BuyCar ensures a smooth, safe, and rewarding journey for every car enthusiast.         </p>
        
      </div></Col>
      <Col sm={3}><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.shutterstock.com/image-photo/happy-mid-aged-older-business-600nw-2322385015.jpg" />
        </Card></Col>
      </Row>
      <br/><br/><br/><br/><br/><br/>
      <Row>
        <Col sm={3}><Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.shutterstock.com/shutterstock/photos/2444486023/display_1500/stock-photo-email-marketing-concept-for-business-communication-and-digital-marketing-direct-selling-project-in-2444486023.jpg" />
        </Card></Col>
        <Col sm={9}>
        <div className="text-start">
        <h4 className="fw-bold">A Letter from Our CEO

</h4>
        <p>
        Dear Customer,

When I first envisioned BuyCar, I had one simple goal: to create a platform that makes buying and selling cars effortless, secure, and trustworthy. Cars are more than just vehicles—they represent freedom, dreams, and new opportunities. I wanted to build a brand that combines convenience, reliability, and transparency, ensuring that every transaction is smooth and stress-free.

At BuyCar, we uphold our values in everything we do: fair pricing, verified listings, and customer-first service. We partner with trusted sellers, prioritize secure transactions, and leverage technology to bring you the best experience possible. Every step we take is rooted in our commitment to making car trading simpler, safer, and more accessible for everyone.

But this journey isn’t just about cars—it’s about community. You, our customers, are at the heart of everything we do. Your trust and feedback inspire us to improve, innovate, and push boundaries. Each time you choose BuyCar, you become part of a mission to redefine how people buy and sell vehicles.

Thank you for being part of our story. Together, we’re not just building a platform; we’re shaping the future of car ownership—one that is transparent, efficient, and customer-focused.

With gratitude and excitement for the road ahead,
rohit
CEO & Founder, BuyCar       </p>
        
      </div>
      </Col>
      </Row>
    </Container>
            <Bottom/>
        </div>
    );
}
export default Aboutus;