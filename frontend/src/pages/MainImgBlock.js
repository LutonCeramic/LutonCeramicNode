import React from "react";
import styled, { keyframes } from "styled-components";
import { Breadcrumb } from "antd";
import { routeConstant } from "../config/routeConstant";
import { HeaderLang } from "../lang/HeaderLang";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const PageTitleSection = styled.section`
  position: relative;
  background: url(${(props) => props.bgImage}) center/cover no-repeat;
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

const MainImgBlock = ({ title = "", imgLink = "" }) => {
  return (
    <>
      <PageTitleSection bgImage={imgLink}>
        <Overlay>
          <Container>
            <Title>{title}</Title>
            <StyledBreadcrumb separator="/">
              <Breadcrumb.Item>
                <a href={routeConstant.HOME}>{HeaderLang.HOME}</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </StyledBreadcrumb>
          </Container>
        </Overlay>
      </PageTitleSection>
    </>
  );
};

export default MainImgBlock;
