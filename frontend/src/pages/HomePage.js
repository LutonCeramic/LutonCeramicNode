// src/pages/HomePage.js
import React from "react";
import styled from "styled-components";
import HomeSlider from "../components/HomeSlider";
import HomeAboutUsSection from "../components/HomeAboutUsSection";
import HomeExploreCollection from "../components/HomeExploreCollection";
import HomeWhyUs from "../components/HomeWhyUs";
import HomeCountSection from "../components/HomeCountSection";
import HomeVisitUs from "../components/HomeVisitUs";
import HomeApplicationArea from "../components/HomeApplicationArea";
import HomeInfrastructure from "../components/HomeInfrastructure";
import HomeExportBlock from "../components/HomeExportBlock";
import HomeAvidanceSection from "../components/HomeAvidanceSection";

// Global wrapper
const PageWrapper = styled.div`
  scroll-behavior: smooth;
  width: 100%;
  overflow-x: hidden;
`;

// Common responsive container
const SectionWrapper = styled.section`
  width: 100%;
  max-width: 1280px; /* keeps sections centered */
  margin: 0 auto;
  padding: 60px 20px;

  @media (max-width: 1024px) {
    padding: 50px 16px;
  }

  @media (max-width: 768px) {
    padding: 40px 14px;
  }

  @media (max-width: 480px) {
    padding: 30px 12px;
  }
`;

const HomePage = () => {
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <PageWrapper>
      {/* Hero Carousel with animated sliding image */}
      <HomeSlider />

      {/* About Luton Ceramic Block */}
      <SectionWrapper>
        <HomeAboutUsSection />
      </SectionWrapper>

      {/* Explore Our Collection Block */}
      <SectionWrapper>
        <HomeExploreCollection />
      </SectionWrapper>

      {/* WHY CHOOSE US Section */}
      <SectionWrapper>
        <HomeWhyUs />
      </SectionWrapper>

      {/* Application Areas Section */}
      <SectionWrapper>
        <HomeApplicationArea />
      </SectionWrapper>

      {/* Infrastructure Section */}
      <SectionWrapper>
        <HomeInfrastructure />
      </SectionWrapper>

      {/* Banner + Stats Block */}
      <SectionWrapper>
        <HomeCountSection />
      </SectionWrapper>

      {/* Visit us Section */}
      <SectionWrapper>
        <HomeVisitUs />
      </SectionWrapper>

      {/* Export Network */}
      <SectionWrapper>
        <HomeExportBlock />
      </SectionWrapper>

      {/* Avidance Section */}
      <SectionWrapper>
        <HomeAvidanceSection />
      </SectionWrapper>
    </PageWrapper>
  );
};

export default HomePage;
