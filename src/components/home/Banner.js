import React from "react";
import Slider from "react-slick";
import {bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive} from "../../assets/index"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    appendDots: dots => (
        <div
          style={{
            backgroundColor: "#ddd",
            borderRadius: "10px",
            padding: "10px"
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: i => (
        <div
          style={{
            width: "30px",
            color: "blue",
            border: "1px blue solid"
          }}
        >
          {i + 1}
        </div>
      )
  };


  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={bannerImgOne} alt="banner-one"/>
        </div>
        <div>
          <img src={bannerImgTwo} alt="banner-two"/>
        </div>
        <div>
          <img src={bannerImgThree} alt="banner-three"/>
        </div>
        <div>
          <img src={bannerImgFour} alt="banner-four"/>
        </div>
        <div>
          <img src={bannerImgFive} alt="banner-five"/>
        </div>
    
        
      </Slider>
    </div>
  );
};

export default Banner;
