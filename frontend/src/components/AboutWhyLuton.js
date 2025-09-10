import React from "react";
import styled from "styled-components";
import { ABOUT_WHY_LUTON } from "../config/Constant";
import { map } from "lodash";
import { AboutPageLang } from "../lang/AboutPageLang";

export const WhyUsSection = styled.section`
  padding: 100px 20px;
`;

export const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const SecTitle = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h3 {
    font-size: 36px;
    font-weight: 700;
    color: #222;
    margin-bottom: 15px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .text {
    font-size: 18px;
    color: #666;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

export const FeatureCard = styled.div`
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
  }

  .image {
    width: 100%;
    height: 220px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  &:hover .image img {
    transform: scale(1.05);
  }

  p {
    font-size: 20px;
    font-weight: 600;
    margin: 15px 0;
    color: #333;
  }

  .text {
    font-size: 16px;
    color: #555;
    padding: 0 20px 25px;
    line-height: 1.6;
  }
`;

const AboutWhyLuton = () => {
  return (
    <>
      <WhyUsSection>
        <Container>
          <SecTitle>
            <h3>{AboutPageLang.WHY_US}</h3>
            <div className="text">
              {AboutPageLang.WHY_US_DESC}
            </div>
          </SecTitle>
          <Grid>
            {map(ABOUT_WHY_LUTON, (item, index) => (
              <FeatureCard key={index}>
                <div className="image">
                  <img src={item.img} alt={item.title} loading="lazy" />
                </div>
                <p>{item.title}</p>
                <div className="text">{item.desc}</div>
              </FeatureCard>
            ))}
          </Grid>
        </Container>
      </WhyUsSection>
    </>
  );
};

export default AboutWhyLuton;
