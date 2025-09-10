import React from "react";
import styled from "styled-components";
import { routeConstant } from "../config/routeConstant";
import { HomePageLang } from "../lang/HomePageLang";
import { GLOBAL_FOOTPRINT_IMG } from "../config/Constant";

export const GlobalFootprintBlock = styled.div`
  padding: 50px 20px;
  background-color: #ffffff;
`;

export const Heading = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const StyledBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
  background-color: #ffffff;
  padding: 30px 20px 20px 20px;
  margin-left: -1300px;
  box-shadow: 0 20px 20px rgba(10, 10, 10, 0.08);
  position: relative;
  text-align: center;

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const VerticalText = styled.div`
  position: absolute;
  top: 50%;
  left: -80px;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: center;
  font-size: 28px;
  font-weight: bold;
  color: #e0e0e0;
  letter-spacing: 5px;

  @media (max-width: 768px) {
    position: relative;
    top: auto;
    left: auto;
    transform: rotate(0deg);
    margin-bottom: 15px;
    letter-spacing: 3px;
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    letter-spacing: 2px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #555;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Arrow = styled.a`
  display: inline-block;
  font-size: 20px;
  color: #ff5722;
  margin-top: 15px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const ImageContainer = styled.img`
  flex: 1;
  min-width: 300px;
  max-width: 800px;
  width: 100%;
  height: 500px;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const GlobalFootprint = () => {
  return (
    <GlobalFootprintBlock>
      <Heading>{HomePageLang.GLOBAL_FOOTPRINT}</Heading>
      <StyledBody>
        <ImageContainer
          src={GLOBAL_FOOTPRINT_IMG}
          alt="Export Area"
        />
        <TextContainer>
          <VerticalText>{HomePageLang.EXPORT}</VerticalText>
          <Description>{HomePageLang.GLOBAL_FOOTPRINT_DESC}</Description>
          <Arrow href={routeConstant.EXPORT}>&rarr;</Arrow>
        </TextContainer>
      </StyledBody>
    </GlobalFootprintBlock>
  );
};

export default GlobalFootprint;
