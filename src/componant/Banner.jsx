import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import ban from '../assets/Group.jpg';
import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        appendDots: dots => (
            <div
                style={{
                    borderRadius: "10px",
                    padding: "10px",
                    position: "absolute",
                    top: "183px",
                    left: "83px",
                    transform: "translateY(-50% )"
                }}
            >
                <ul className="onee" style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: i => (
            <div
                style={{
                    width: "30px",
                    color: "blue",
                    borderRight: "3px solid white",
                    padding: "5px 0",
                    color: "transparent",
                }}
            >
                0{i + 1}
            </div>
        )
    };

    return (
        <div className="w-full overflow-hidden">
            <Slider {...settings}>
               
                <div>
                    <Link to="/shop">
                        <img
                            src={ban}
                            alt="Banner"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/shop">
                        <img
                            src={ban}
                            alt="Banner"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/shop">
                        <img
                            src={ban}
                            alt="Banner"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
                <div>
                    <Link to="/shop">
                        <img
                            src={ban}
                            alt="Banner"
                            className="w-full h-auto object-cover"
                        />
                    </Link>
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
