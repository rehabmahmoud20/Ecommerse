import Carousel from 'react-bootstrap/Carousel';
import computer from "../../assets/computer.jpg";
import menHeader from '../../assets/menHeader.jpg'
import womenHeader from '../../assets/womenHeader.jpg'
import "./slider.css"


function IndividualIntervalsExample() {
  return (
    <Carousel className="mb-4">
      <Carousel.Item  className=" w-100">
        <img
          className="d-block img-fluid w-100 h-50 slider-img"
          src={womenHeader}
          alt="First slide"

        />
       
      </Carousel.Item>
      <Carousel.Item  className="w-100 ">
        <img
          className="d-block  img-fluid w-100 slider-img"
          src={menHeader}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item   className="w-100 ">
        <img
          className="d-block img-fluid w-100  slider-img"
         
          src={computer}
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
// interval={1000}
// interval={500}


