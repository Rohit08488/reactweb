import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ImPrevious } from 'react-icons/im';

function Cardsection(){
    return(
        <Container>
      <br></br>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/PaganiZondaHPBarchetta-ezgif.com-optijpeg-jpg.webp" />
      <Card.Body>
        <Card.Title>Pagani Zonda HP Barchetta</Card.Title>
        <Card.Text>
        Pagani was established in 1992 by Horacio Pagani and the Italian brand is known to engineer some of the most expensive cars in the hypercar space.
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>


    <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/SPAutomotiveChaos-ezgif.com-optijpeg-jpg.webp" />
      <Card.Body>
        <Card.Title>SP Automotive Chaos</Card.Title>
        <Card.Text>
        In 2024, the Greek start-up, Spyros Panopoulos Automotive, recently made one of the most expensive cars, SP Automotive Chaos. It’s a high-performance car.
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>


        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/Rolls-RoyceSweptail-ezgif.com-optijpeg.jpg" />
      <Card.Body>
        <Card.Title>Rolls-Royce Sweptail</Card.Title>
        <Card.Text>
        The iconic Rolls-Royce Sweptail is a modernised version of the coach-built Rolls-Royce cars of the 1920s and 1930s. Built for Hong Kong-based
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>
      </Row>
        <br></br>
      <Row>
        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/BugattiCentodieci-ezgif.com-optijpeg-jpg.webp" />
      <Card.Body>
        <Card.Title> Bugatti Centodieci</Card.Title>
        <Card.Text>
        ‘Centodieci’ is Italian for ‘110’ as the Bugatti Centodieci is a homage to the legendary Bugatti EB 110 and a celebration of Bugatti’s 110th anniversary.
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>


        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/Mercedes-MaybachExelero-ezgif.com-optijpeg-jpg.webp" />
      <Card.Body>
        <Card.Title> Mercedes- Maybach Exelero</Card.Title>
        <Card.Text>
        The Mercedes Maybach Exelero is a one-off high-performance sports car engineered by the collaboration of the Italian automaker, Stola 
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>


        <Col><Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.spinny.com/blog/wp-content/uploads/2024/09/Pagani-Huayra-Codalunga-jpg.webp" />
      <Card.Body>
        <Card.Title>Pagani Huayra Codalunga</Card.Title>
        <Card.Text>
        The Pagani Huayra Codalunga was built when two Pagani patrons expressed their wish for a car with a long tail much like the vintage long-tail design seenon race
        </Card.Text>
        <Button variant="success">Show More</Button>
      </Card.Body>
    </Card></Col>
      </Row>

      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
    );
}
export default Cardsection;