import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { videoUrl } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { ExploreButton } from "./HomeAboutUsSection";
import { routeConstant } from "../config/routeConstant";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const VisitUnitSection = styled(motion.section)`
  width: 100%;
  min-height: 420px;
  margin: 80px 0;
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0;
  @media (max-width: 900px) {
    flex-direction: column;
    min-height: 0;
  }
`;

const VisitUnitLeft = styled.div`
  min-width: 380px;
  max-width: 70vw;
  background: #222;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  overflow: hidden;
  @media (max-width: 900px) {
    max-width: 100vw;
    min-height: 220px;
  }
`;

const VisitUnitVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border: none;
`;

const VisitUnitRight = styled.div`
  flex: 1;
  min-width: 320px;
  background:rgb(173, 170, 170);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  @media (max-width: 900px) {
    padding: 40px 10px;
  }
`;

const VisitUnitTitle = styled.h2`
  font-size: 2.3rem;
  font-family: "Poppins", serif;
  font-weight: 500;
  color: #222;
  letter-spacing: 2px;
  margin-bottom: 32px;
  line-height: 1.2;
`;

const HomeVisitUs = () => {
  return (
    <VisitUnitSection
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <VisitUnitLeft>
        <VisitUnitVideo
          controls
          autoPlay
          loop
          muted
          src={videoUrl}
          alt="Production Unit"
        />
      </VisitUnitLeft>
      <VisitUnitRight>
        <VisitUnitTitle>
          {HomePageLang.COME_AND_VISIT}
        </VisitUnitTitle>
        <ExploreButton href={routeConstant.CONTACT}>
          {HomePageLang.SCHEDULE_YOUR_VISIT}
        </ExploreButton>
      </VisitUnitRight>
    </VisitUnitSection>
  );
};

export default HomeVisitUs;
