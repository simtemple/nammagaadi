import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "./carouselimages/i1.jpg";
import img2 from "./carouselimages/i2.jpg";
import img3 from "./carouselimages/i3.jpg";
import img4 from "./carouselimages/i4.jpg";

export default function CarouselEl() {
  return (
    <Carousel
      interval="4000"
      controls={false}
      pause={false}
      slide={true}
      nextIcon={null}
      prevIcon={null}
      indicators={false}
    >
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Fourth slide" />
      </Carousel.Item>
    </Carousel>
  );
}
