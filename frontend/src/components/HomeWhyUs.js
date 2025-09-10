// LutonFeatureSection.jsx
import React from "react";
import styled from "styled-components";
import { Carousel, Row, Col, Image } from "antd";
import { map } from "lodash";
import { HomePageLang } from "../lang/HomePageLang";
import { WHAT_MAKES_US_BEST } from "../config/Constant";

const Section = styled.section`
  background-color: #2b2d3c;
  background-image: url("/products/400x400/des_5367.jpg");
  height: 500px;
  padding: 60px 0;
  text-align: center;
`;

const Title = styled.h2`
  color: #ffffff;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  color: #cccccc;
  font-size: 16px;
  margin-bottom: 40px;
`;

const CarouselContainer = styled.div`
  max-width: 1200px;
  background: #fff;
  height: 500px;
  margin: -300px auto 0 auto;
  backdrop-filter: blur(15px);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  z-index: 2;
  position: relative;
  padding: 35px 28px;
  transition: all 0.4s ease;

  .slick-prev,
  .slick-next {
    font-size: 24px;
    color: white;
    z-index: 1;
  }

  .slick-prev {
    left: -40px;
  }

  .slick-next {
    right: -40px;
  }
`;

const ContentCard = styled.div`
  background: #ffffff;
  padding: 30px;
  text-align: left;
  height: 100%;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  position: relative;
  padding-left: 20px;

  &::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 2px;
    background-color: #ffc107;
    left: 0;
    top: 12px;
  }
`;

const CardDescription = styled.p`
  font-size: 15px;
  color: #333;
  line-height: 1.6;
`;

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: cover;
`;

const SlideItem = ({ title, description, image }) => (
  <Row gutter={[32, 32]} align="middle" justify="center">
    <Col span={12}>
      <ContentCard>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </ContentCard>
    </Col>
    <Col span={12}>
      <StyledImage height={500} width={500} src={image} alt={title} preview={false}/>
    </Col>
  </Row>
);

const HomeWhyUs = () => {
  return (
    <>
      <Section>
        <Title>{HomePageLang.WHAT_MAKES_US_BEST}</Title>
        <Subtitle>{HomePageLang.WHY_BEST_MESSAGE}</Subtitle>
      </Section>
      <CarouselContainer>
        <Carousel arrows dots={false} autoplay autoplaySpeed={5000}>
          {map(WHAT_MAKES_US_BEST, (slide) => (
              <SlideItem {...slide} />
          ))}
        </Carousel>
      </CarouselContainer>
    </>
  );
};

export default HomeWhyUs;
