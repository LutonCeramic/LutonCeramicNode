import React from "react";
import { TECHINCAL_SPECIFICATION_IMG } from "../config/Constant";
import { Container, Grid, SecTitle, WhyUsSection } from "./AboutWhyLuton";
import { AboutPageLang } from "../lang/AboutPageLang";
import MainImgBlock from "../pages/MainImgBlock";

const TechnicalSpecification = () => {
  return (
    <>
      <MainImgBlock title={AboutPageLang.TECHNICAL_SPECIFICATION} imgLink={"/assets/techspeccover.jpg"} />

      <WhyUsSection>
        <Container>
          <SecTitle>
            <h3>{AboutPageLang.TECHNICAL_SPECIFICATION}</h3>
          </SecTitle>
          <Grid>
            <div className="image">
              <img
                src={TECHINCAL_SPECIFICATION_IMG}
                alt={TECHINCAL_SPECIFICATION_IMG}
                loading="lazy"
              />
            </div>
          </Grid>
        </Container>
      </WhyUsSection>
    </>
  );
};

export default TechnicalSpecification;
