import { Carousel } from "react-bootstrap";


function Slider(){
    return(
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://www.spinny.com/blog/wp-content/uploads/2024/09/videoframe_0.webp"
          alt="First slide"
          style={{ height: "600px", objectFit: "cover" }} 
        />
        <Carousel.Caption>
        <h2>Rolls-Royce La Rose Noire Droptail</h2>
        <h4>The Rolls-Royce La Rose Noire Droptail takes the pole position among the most expensive cars</h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://www.spinny.com/blog/wp-content/uploads/2024/09/Rolls-RoyceBoatTail-ezgif.com-optijpeg-jpg.webp"
          alt="Second slide"
          style={{ height: "600px", objectFit: "cover" }} 
        />
        <Carousel.Caption>
        <h2>Rolls-Royce Boat Tail</h2>
        <h4>The second one of the list of most expensive cars, Rolls-Royce Boat Tail, is the successor to the Rolls-Royce Sweptail.</h4>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-40"
          src="https://www.spinny.com/blog/wp-content/uploads/2024/09/Bugatti-La-Voiture-Noire-jpg.webp"
          alt="Third slide"
          style={{ height: "600px", objectFit: "cover" }} 
        />
        <Carousel.Caption>
        <h2>Bugatti La Voiture Noire</h2>
        <h4>The most expensive car from the French carmaker, Bugatti La Voiture Noire is a tribute to Jean Bugatti’s personal car, Type 57 SC Atlantic. </h4>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
export default Slider;