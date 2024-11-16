import { Carousel, Container } from "react-bootstrap";
import '../App.css'

function MyCarousel() {
  return (
    <div className="container-fluid" style={{ padding: 0, margin: 0  }}>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.valthorens.com/app/uploads/iris-images/8455/230406-ski-salomon-l.brochot-ot-val-thorens-62-1920x1080-f50_50.webp"
          alt="High Quality Skis"
        />
        <Carousel.Caption>
        <h3>High Quality Skis</h3>
        <p>Perfect for all levels, from beginners to experts.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
            className="d-block w-100"
            src="https://ik.imagekit.io/mayamaya/wp-content/uploads/2023/06/Skis-and-other-skiing-equipment_-1.jpeg"
            alt="Affordable Prices"
          />
        <Carousel.Caption>
        <h3>Affordable Prices</h3>
        <p>Great rental rates to fit any budget.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://bycar.su/media/upload/a299482e53a97b9f6dd0f846a3ec015e.jpg"
            alt="Beautiful Slopes"
          />
        <Carousel.Caption>
        <h3>Beautiful Slopes</h3>
        <p>Explore stunning locations with our top gear.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MyCarousel;
