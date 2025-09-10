import React from "react";
import styled, { keyframes } from "styled-components";
import { exportPageLang } from "../lang/ExportPageLang";
import { EXPORT_NETWORK_CARD } from "../config/Constant";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const NetworkContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 50px;
  position: relative;
  z-index: 2;

  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
    }
  }
`;

const Content = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 24px;
  animation: ${fadeInUp} 1.2s ease;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 800;
  color: #222;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: #ffcc00;
    border-radius: 2px;
  }
`;

const Paragraph = styled.p`
  font-size: 17px;
  color: #555;
  line-height: 1.8;
`;

const SubHeading = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: #ff6600;
  }
`;

const ExportNetwork = () => {
  return (
    <>
      <NetworkContainer>
        <ImageWrapper>
          <img src={EXPORT_NETWORK_CARD} alt={exportPageLang} />
        </ImageWrapper>
        <Content>
          <Heading>{exportPageLang.EXPORT_NETWORK}</Heading>
          <Paragraph>{exportPageLang.EXPORT_NETWORK_DESC_1}</Paragraph>

          <SubHeading>{exportPageLang.QUALTY_INSPECTION}</SubHeading>
          <Paragraph>{exportPageLang.EXPORT_NETWORK_DESC_1}</Paragraph>

          <SubHeading>{exportPageLang.EXPORT_RANGE}</SubHeading>
          <Paragraph>{exportPageLang.EXPORT_NETWORK_DESC_3}</Paragraph>

          <SubHeading>{exportPageLang.YOUR_BRAND_LABELLING}</SubHeading>
          <Paragraph>{exportPageLang.EXPORT_NETWORK_DESC_4}</Paragraph>
        </Content>
      </NetworkContainer>
    </>
  );
};

export default ExportNetwork;
