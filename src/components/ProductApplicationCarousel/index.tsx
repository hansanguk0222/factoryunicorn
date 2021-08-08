import React, { useEffect } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ProductApplication } from "./ProductApplication";
import LeftArrow from "@/svg/LeftArrow.svg";
import RightArrow from "@/svg/RightArrow.svg";
import { Img } from "@/components/Common/Img";

const CarouselChangeComponent = styled.div`
  align-self: center;
`;

export const ProductApplicationCarousel = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <Img src={RightArrow} shape="productApplicationIcon" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <Img src={LeftArrow} shape="productApplicationIcon" />
      </div>
    );
  };

  useEffect(() => {
    console.log(document.getElementsByClassName("slick-initialized"));
  }, []);

  return (
    <Container>
      <StyledSlider
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        centerMode={true}
        centerPadding={"0px"}
        arrows={true}
        nextArrow={<NextArrow onClick />}
        prevArrow={<PrevArrow onClick />}
      >
        <ProductApplication isExist={true} />
        <ProductApplication isExist={false} />
      </StyledSlider>
    </Container>
  );
};

const Container = styled.div``;

const StyledSlider = styled(Slider)`
  .arrow {
    position: absolute;
    z-index: 10;
  }

  .next {
    right: -10%;
    top: 50%;
    @media only screen and (max-width: 699px) {
      display: none;
    }
  }

  .prev {
    left: -10%;
    top: 50%;
    @media only screen and (max-width: 699px) {
      display: none;
    }
  }

  .slick-list {
    box-shadow: ${(props) => props.theme.boxShadow.thickDarkGray};
    @media only screen and (min-width: 1000px) {
      width: ${(props) => props.theme.size.width.carouselLargeContainer};
      height: ${(props) => props.theme.size.height.carouselLargeContainer};
    }
    @media only screen and (max-width: 999px) {
      width: ${(props) => props.theme.size.width.carouselMediumContainer};
      height: ${(props) => props.theme.size.height.carouselMediumContainer};
    }
    @media only screen and (max-width: 849px) {
      width: ${(props) => props.theme.size.width.carouselSmallContainer};
      height: ${(props) => props.theme.size.height.carouselSmallContainer};
    }
    @media only screen and (max-width: 699px) {
      display: none;
    }
    margin: 0 auto;
  }
`;
