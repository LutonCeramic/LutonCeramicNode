import React from "react";
import styled, { keyframes } from "styled-components";
import { Breadcrumb } from "antd";
import { routeConstant } from "../config/routeConstant";
import ExportCountrySection from "../components/ExportCountrySection";
import ExportNetwork from "../components/ExportNetwork";
import { exportPageLang } from "../lang/ExportPageLang";
import { EXPORT_MAIN } from "../config/Constant";
import ExportCertificate from "../components/ExportCertificate";
import { HeaderLang } from "../lang/HeaderLang";

const floatBubble = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  50% { transform: translateY(-50px) scale(1.1); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0.8; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const floatShape = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
  50% { transform: translateY(-40px) rotate(15deg); opacity: 1; }
  100% { transform: translateY(0) rotate(0deg); opacity: 0.7; }
`;

const PageTitleSection = styled.section`
  position: relative;
  background: url(${EXPORT_MAIN}) center/cover no-repeat;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
  padding: 40px 20px;
  color: #fff;
  overflow: hidden;
`;

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 30%;
  background: rgba(0, 0, 0, 0.6);
  clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
  display: flex;
  align-items: flex-end;
  padding: 50px 40px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  z-index: 2;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 900;
  letter-spacing: 2px;
  color: #ffcc00;
  margin-bottom: 10px;
  text-transform: uppercase;
  transition: all 0.3s ease;

  &:hover {
    color: #ffffff;
    text-shadow: 0px 0px 20px #ffcc00;
  }
`;

const StyledBreadcrumb = styled(Breadcrumb)`
  .ant-breadcrumb-link,
  .ant-breadcrumb-separator {
    color: #fff !important;
  }
  .ant-breadcrumb-link a {
    color: #ffcc00 !important;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #ffffff !important;
    }
  }
`;

const Bubble = styled.div`
  position: absolute;
  bottom: -50px;
  width: ${(props) => props.size || "20px"};
  height: ${(props) => props.size || "20px"};
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: ${floatBubble} ${(props) => props.duration || "6s"} infinite
    ease-in-out;
  left: ${(props) => props.left || "50%"};
`;

const Shape = styled.div`
  position: absolute;
  width: ${(props) => props.size || "30px"};
  height: ${(props) => props.size || "30px"};
  background: ${(props) => props.color || "rgba(255, 204, 0, 0.4)"};
  border-radius: ${(props) => (props.type === "circle" ? "50%" : "0")};
  clip-path: ${(props) =>
    props.type === "triangle" ? "polygon(50% 0%, 0% 100%, 100% 100%)" : "none"};
  animation: ${floatShape} ${(props) => props.duration || "6s"} infinite
    ease-in-out;
  top: ${(props) => props.top || "50%"};
  left: ${(props) => props.left || "50%"};
  z-index: 0;
`;

const Butterfly = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: transparent;
  top: ${(props) => props.top || "30%"};
  left: ${(props) => props.left || "70%"};
  animation: ${floatShape} 8s infinite ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 30px;
    background: rgba(255, 102, 0, 0.5);
    border-radius: 50%;
    top: 5px;
  }

  &::before {
    left: 0;
    transform: rotate(-20deg);
  }

  &::after {
    right: 0;
    transform: rotate(20deg);
  }
`;

const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  background: linear-gradient(to bottom right, #f9f9f9, #ffffff);
  overflow: hidden;
`;

const Export = () => {
  return (
    <>
      {/* Hero Section */}
      <PageTitleSection>
        <Overlay>
          <Container>
            <Title>{exportPageLang.EXPORT}</Title>
            <StyledBreadcrumb separator="/">
              <Breadcrumb.Item>
                <a href={routeConstant.HOME}>{HeaderLang.HOME}</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{exportPageLang.EXPORT}</Breadcrumb.Item>
            </StyledBreadcrumb>
          </Container>
        </Overlay>

        {/* Floating bubbles */}
        <Bubble size="30px" duration="7s" left="20%" />
        <Bubble size="15px" duration="5s" left="40%" />
        <Bubble size="25px" duration="6s" left="70%" />
        <Bubble size="20px" duration="8s" left="85%" />
      </PageTitleSection>

      {/* Network Section */}
      <Section>
        {/* Shapes */}
        <Shape
          type="circle"
          size="25px"
          color="rgba(0,150,255,0.3)"
          top="10%"
          left="20%"
          duration="7s"
        />
        <Shape
          type="triangle"
          size="30px"
          color="rgba(255,102,0,0.4)"
          top="40%"
          left="80%"
          duration="9s"
        />
        <Shape
          type="circle"
          size="15px"
          color="rgba(0,200,100,0.3)"
          top="70%"
          left="10%"
          duration="6s"
        />
        <Butterfly top="80%" left="30%" />
        <Butterfly top="20%" left="90%" />
        <ExportNetwork />
      </Section>
      <ExportCountrySection />
      <ExportCertificate />
    </>
  );
};

export default Export;
