import { Box } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image1 from "../../../assets/slide1.png";
import Image2 from "../../../assets/slide2.png";
import Image3 from "../../../assets/slide3.png";
import Image4 from "../../../assets/slide4.png";
import Image5 from "../../../assets/slide5.png";
import Image6 from "../../../assets/slide6.png";

export const LeftSide = () => {
  const settings = {
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 1000,
    cssEase: "linear",
    infinite: true,
    focusOnSelect: false,
    vertical: true,
    arrows: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          vertical: false,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        maxWidth: "400px",
        pointerEvents: "none",
        "@media (max-width: 991px)": {
          maxWidth: "100%",
          marginTop: 5,
        },
      }}
    >
      <Slider {...settings}>
        <div>
          <img src={Image1} alt="slide1" />
        </div>
        <div>
          <img src={Image2} alt="slide3" />
        </div>
        <div>
          <img src={Image3} alt="slide3" />
        </div>
        <div>
          <img src={Image4} alt="slide4" />
        </div>
        <div>
          <img src={Image5} alt="slide5" />
        </div>
        <div>
          <img src={Image6} alt="slide6" />
        </div>
      </Slider>
    </Box>
  );
};
