import React, { useContext } from 'react';
import Container from './Container';
import ArrivalComponant from './ArrivalComponant';
import { Link } from "react-router-dom";
import { ApiData } from './ContextApi';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { VscArrowSmallRight, VscArrowSmallLeft } from "react-icons/vsc";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="h-[40px] w-[40px] rounded-full absolute top-[50%] right-2 transform -translate-y-1/2 bg-[#979797] flex justify-center items-center cursor-pointer z-10"
      onClick={onClick}
    >
      <VscArrowSmallRight className="text-[24px] text-white" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="h-[40px] w-[40px] rounded-full absolute top-[50%] left-2 transform -translate-y-1/2 bg-[#979797] flex justify-center items-center cursor-pointer z-10"
      onClick={onClick}
    >
      <VscArrowSmallLeft className="text-[24px] text-white" />
    </div>
  );
}

const Newarrivals = () => {
  const { info } = useContext(ApiData);


  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="lg:min-h-[600px] py-[50px]">
      <Container>
        <Slider {...settings}>
          {info.map((item, index) => (
            <Link to="/shop" key={index} className="p-2">
              <ArrivalComponant item={item} />
            </Link>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default Newarrivals;
