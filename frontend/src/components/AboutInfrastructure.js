import React from "react";
import { INFRASTRUCTURE_ALL_IMAGES } from "../config/Constant";
import { map } from "lodash";
import {
  Container,
  FeatureCard,
  Grid,
  SecTitle,
  WhyUsSection,
} from "./AboutWhyLuton";
import { AboutPageLang } from "../lang/AboutPageLang";
import MainImgBlock from "../pages/MainImgBlock";

const AboutWhyLuton = () => {
  return (
    <>
      <MainImgBlock title={AboutPageLang.INFRASTRUCTURE} imgLink={"/infrastructure/infra7.jpg"} />

      <WhyUsSection>
        <Container>
          <SecTitle>
            <h3>{AboutPageLang.OUR_INFRASTRUCTURE}</h3>
            <div className="text">{AboutPageLang.INFRASTRUCTURE_DESC}</div>
          </SecTitle>
          <Grid>
            {map(INFRASTRUCTURE_ALL_IMAGES, (item, index) => (
              <FeatureCard key={index}>
                <div className="image">
                  <img src={item} alt={item} loading="lazy" />
                </div>
              </FeatureCard>
            ))}
          </Grid>
        </Container>
      </WhyUsSection>
    </>
  );
};

export default AboutWhyLuton;
