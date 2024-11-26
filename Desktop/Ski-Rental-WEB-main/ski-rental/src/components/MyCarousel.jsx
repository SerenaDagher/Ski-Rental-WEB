import { Carousel } from "react-bootstrap";
import '../App.css';

function MyCarousel() {
  return (
    <>
      <div
        style={{
          width: '100vw',         // Full width of the viewport
          height: '100vh',        // Full height of the viewport
          margin: 0,
        }}
      >
        <Carousel fade style={{ width: '100%', height: '800px' }}>
          {/* First Carousel Item */}
          <Carousel.Item style={{ height: '800px' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',       // Ensure it takes up full space
                justifyContent: 'center', // Center the image if needed
                alignItems: 'center',  // Center the image vertically
              }}
            >
              <img
                className="carousel-image"
                src="https://www.valthorens.com/app/uploads/iris-images/8455/230406-ski-salomon-l.brochot-ot-val-thorens-62-1920x1080-f50_50.webp"
                alt="High Quality Skis"
                style={{
                  objectFit: 'cover',  // Ensure the image covers the container
                  height: '100%',       // Fill the container's height
                  width: '100%',        // Fill the container's width
                }}
              />
            </div>
            <Carousel.Caption>
              <h3>High Quality Skis</h3>
              <p>Perfect for all levels, from beginners to experts.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Second Carousel Item */}
          <Carousel.Item style={{ height: '800px' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',       // Ensure it takes up full space
                justifyContent: 'center', // Center the image if needed
                alignItems: 'center',  // Center the image vertically
              }}
            >
              <img
                className="carousel-image"
                src="https://www.wagnerskis.com/cdn/shop/articles/mplantz-6089-min_1200x.jpg?v=1601937718"
                alt="Affordable Prices"
                style={{
                  objectFit: 'cover',  // Ensure the image covers the container
                  height: '100%',       // Fill the container's height
                  width: '100%',        // Fill the container's width
                }}
              />
            </div>
            <Carousel.Caption>
              <h3>Affordable Prices</h3>
              <p>Great rental rates to fit any budget.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Third Carousel Item */}
          <Carousel.Item style={{ height: '800px' }}>
            <div
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',       // Ensure it takes up full space
                justifyContent: 'center', // Center the image if needed
                alignItems: 'center',  // Center the image vertically
              }}
            >
              <img
                className="carousel-image"
                src="https://bycar.su/media/upload/a299482e53a97b9f6dd0f846a3ec015e.jpg"
                alt="Beautiful Slopes"
                style={{
                  objectFit: 'cover',  // Ensure the image covers the container
                  height: '100%',       // Fill the container's height
                  width: '100%',        // Fill the container's width
                }}
              />
            </div>
            <Carousel.Caption>
              <h3>Beautiful Slopes</h3>
              <p>Explore stunning locations with our top gear.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}

export default MyCarousel;
