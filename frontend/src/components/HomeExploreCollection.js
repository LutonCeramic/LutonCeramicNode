import React from "react";
import { Image } from "antd";
import styled from "styled-components";
import { EXPLORE_COLLECTIONS } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { routeConstant } from "../config/routeConstant";
import { map } from "lodash";
import { ExploreButton } from "./HomeAboutUsSection";

// Wrapper section
const LuxurySection = styled.section`
  width: 100%;
  padding: 100px 40px 80px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 60px;
  margin: 0 auto;
  max-width: 1440px;

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 40px;
    padding: 60px 20px 40px;
  }

  @media (max-width: 480px) {
    padding: 40px 12px 30px;
    gap: 30px;
  }
`;

// Left content (text + button)
const LuxuryLeft = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;

  @media (max-width: 1100px) {
    width: 100%;
    padding: 0;
    align-items: center;
    text-align: center;
  }
`;

const LuxuryTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #222;
  margin-bottom: 32px;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const LuxuryDesc = styled.p`
  font-size: 1.25rem;
  color: #444;
  margin-bottom: 40px;
  line-height: 1.7;
  max-width: 420px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 24px;
  }
`;

// Scroll container
const SliderViewport = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

// Scroll track with animation
const SliderTrack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 18px;
  animation: scrollLeft 30s linear infinite;

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

const SliderItem = styled.div`
  flex: 0 0 400px;
  height: 400px;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(0, 0, 0, 0.04);
  display: flex;

  @media (max-width: 1100px) {
    flex: 0 0 250px;
    height: 300px;
  }

  @media (max-width: 700px) {
    flex: 0 0 180px;
    height: 240px;
  }

  @media (max-width: 480px) {
    flex: 0 0 140px;
    height: 200px;
  }
`;

const SliderImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

// Button responsive styling
const ResponsiveExploreButton = styled(ExploreButton)`
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const HomeExploreCollection = () => {
  return (
    <LuxurySection>
      <LuxuryLeft>
        <LuxuryTitle>{HomePageLang.OUR_COLLECTIONS}</LuxuryTitle>
        <LuxuryDesc>{HomePageLang.COLLECTIONS_DESC}</LuxuryDesc>
        <ResponsiveExploreButton href={routeConstant.COLLECTION}>
          {HomePageLang.EXPLORE_OUR_COLLECTION}
        </ResponsiveExploreButton>
      </LuxuryLeft>

      <SliderViewport>
        <SliderTrack>
          {map(EXPLORE_COLLECTIONS, (tile, i) => (
            <SliderItem key={i} aria-label={tile.title || `explore-${i}`}>
              <SliderImg
                src={tile.img}
                alt={tile.title || `explore-${i}`}
              />
            </SliderItem>

          ))}
        </SliderTrack>
      </SliderViewport>
    </LuxurySection>
  );
};

export default HomeExploreCollection;
