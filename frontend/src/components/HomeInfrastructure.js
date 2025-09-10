import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { INFRASTRUCTURE_IMAGES } from "../config/Constant";
import { routeConstant } from "../config/routeConstant";
import { ExploreButton } from "./HomeAboutUsSection";
import { HomePageLang } from "../lang/HomePageLang";

const AboutLutonSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

const AboutLutonInner = styled.div`
  display: flex;
  gap: 0;
  background: transparent;
  width: 100%;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const AboutImageWrap = styled.div`
  position: relative;
  width: 45vw;
  @media (max-width: 900px) {
    width: 100vw;
    min-width: unset;
    max-width: 100vw;
    margin-bottom: 32px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0;
  display: block;
  position: relative;
  z-index: 2;
`;

const AboutContent = styled.div`
  flex: 1;
  background: transparent;
  padding: 0 0 0 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 900px) {
    padding: 0 12px;
    text-align: center;
    align-items: center;
  }
`;

const AboutLabel = styled.div`
  font-size: 1.1rem;
  color: #222;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 12px;
  &:after {
    content: "";
    display: inline-block;
    width: 48px;
    height: 2px;
    background: #444;
    margin-left: 12px;
    vertical-align: middle;
  }
  @media (max-width: 900px) {
    justify-content: center;
    &:after {
      display: none;
    }
  }
`;

const AboutTitle = styled.h2`
  font-size: 2.6rem;
  font-weight: 700;
  color: rgb(36, 36, 34);
  margin-bottom: 18px;
  letter-spacing: 2px;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const AboutDesc = styled.ul`
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 24px;
  line-height: 1.8;
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 12px;
    position: relative;
    padding-left: 24px;

    &:before {
      content: "✔";
      position: absolute;
      left: 0;
      top: 0;
      color: #f8b500;
      font-size: 1rem;
    }
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HomeInfrastructure = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <AboutLutonSection>
        <AboutLutonInner>
          <AboutContent>
            <AboutLabel>{HomePageLang.INFRASRUCTURE}</AboutLabel>
            <AboutTitle dangerouslySetInnerHTML={{ __html: HomePageLang.INFRASTRUCTURE_DESC }} />
            <AboutDesc>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_1}</li>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_2}</li>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_3}</li>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_4}</li>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_5}</li>
              <li>{HomePageLang.INFRASTRUCTURE_LINE_6}</li>
            </AboutDesc>
            <ExploreButton href={routeConstant.INFRASTRUCTURE}>
              {HomePageLang.VIEW_INFRASTRUCTURE}
            </ExploreButton>
          </AboutContent>
          <AboutImageWrap>
            <AboutImage src={INFRASTRUCTURE_IMAGES} alt="Luton Ceramic Pvt. Ltd. Infrastructure" />
          </AboutImageWrap>
        </AboutLutonInner>
      </AboutLutonSection>
    </motion.div>
  );
};

export default HomeInfrastructure;
