import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HOME_ABOUT_US_IMG } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { CommonLang } from "../lang/CommonLang";

const AboutLutonSection = styled.section`
  width: 100%;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 64px 20px 48px;

  @media (max-width: 768px) {
    padding: 48px 16px 32px;
  }

  @media (max-width: 480px) {
    padding: 40px 12px 24px;
  }
`;

const AboutLutonInner = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  background: transparent;
  max-width: 1200px;
  width: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const AboutImageWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 520px;
  min-width: 320px;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 100%;
    margin-bottom: 32px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 0;
  position: relative;
  z-index: 2;
`;

const AboutContent = styled.div`
  flex: 1;
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 900px) {
    padding: 0;
    align-items: center;
    text-align: center;
  }
`;

const AboutLabel = styled.div`
  font-size: 1.1rem;
  color: #222;
  font-weight: 500;
  letter-spacing: 2px;
  margin-bottom: 12px;
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

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const AboutDesc = styled.p`
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 18px;
  line-height: 1.7;
  font-family: "Poppins", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

export const ExploreButton = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background: #222;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  margin-top: 16px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background: rgb(196, 191, 191);
    color: #000000;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
    white-space: normal;
  }
`;

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const HomeAboutUsSection = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <AboutLutonSection>
        <AboutLutonInner>
          <AboutImageWrap>
            <AboutImage
              src={HOME_ABOUT_US_IMG}
              alt="Luton Ceramic Pvt. Ltd. Outdoor"
            />
          </AboutImageWrap>
          <AboutContent>
            <AboutLabel>{HomePageLang.ABOUT_US}</AboutLabel>
            <AboutTitle>{CommonLang.LUTON_CERAMIC}</AboutTitle>
            <AboutDesc>
              {HomePageLang.ABOUT_SECTION_DESC_1}
              <br />
              <br />
              {HomePageLang.ABOUT_SECTION_DESC_2}
            </AboutDesc>
            <ExploreButton href="#">{HomePageLang.EXPLORE_MORE}</ExploreButton>
          </AboutContent>
        </AboutLutonInner>
      </AboutLutonSection>
    </motion.div>
  );
};

export default HomeAboutUsSection;
