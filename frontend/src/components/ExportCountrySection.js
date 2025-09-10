import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { map } from "lodash";
import { AFRICA_COUNTRY, ASIA_COUNTRY, EUROPE_COUNTRY, GULF_COUNTRY } from "../config/Constant";
import { exportPageLang } from "../lang/ExportPageLang";

const floatText = keyframes`
  0% { transform: translate(-20%, -20%) rotate(0deg); }
  25% { transform: translate(20%, -10%) rotate(5deg); }
  50% { transform: translate(20%, 20%) rotate(0deg); }
  75% { transform: translate(-20%, 10%) rotate(-5deg); }
  100% { transform: translate(-20%, -20%) rotate(0deg); }
`;

const Section = styled.section`
  position: relative;
  background: #f5f5f5;
  padding: 80px 20px;
  overflow: hidden;
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 180px;
  font-weight: 900;
  color: #ffffff;
  white-space: nowrap;
  pointer-events: none;
  z-index: 0;
  animation: ${floatText} 20s linear infinite;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const MainHeading = styled(motion.h3)`
  font-size: 36px;
  font-weight: 800;
  color: #222;
`;

const SubHeading = styled(motion.p)`
  font-size: 18px;
  color: #555;
  margin-top: 10px;
`;

const RegionTitle = styled(motion.p)`
  font-size: 26px;
  font-weight: 700;
  color: #333;
  text-align: center;
  margin: 70px 0 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 30px;
  justify-items: center;
`;

const FlagCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 110px;
    height: 75px;
    object-fit: cover;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
  }
  p {
    margin-top: 10px;
    font-size: 15px;
    font-weight: 600;
    color: #444;
  }
`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const ExportCountrySection = () => {
  return (
    <>
      {/* ---------------- Gulf Section ---------------- */}
      <Section>
        <BackgroundText>{exportPageLang.GULF}</BackgroundText>
        <Container>
          <TitleWrapper>
            <MainHeading
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              {exportPageLang.COUNTRY_WE_EXPORT}
            </MainHeading>
            <SubHeading
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              {exportPageLang.GLOBAL_NETWORK}
            </SubHeading>
          </TitleWrapper>

          <RegionTitle
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            {exportPageLang.GULF_COUNTRIES}
          </RegionTitle>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <Grid>
              {map(GULF_COUNTRY, (country, index) => (
                <FlagCard key={index} variants={fadeUp} custom={index * 0.1}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </FlagCard>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* ---------------- Africa Section ---------------- */}
      <Section>
        <BackgroundText>{exportPageLang.AFRICA}</BackgroundText>
        <Container>
          <RegionTitle
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {exportPageLang.AFRICA_COUNTRIES}
          </RegionTitle>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <Grid>
              {map(AFRICA_COUNTRY, (country, index) => (
                <FlagCard key={index} variants={fadeUp} custom={index * 0.1}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </FlagCard>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* ---------------- Africa Section ---------------- */}
      <Section>
        <BackgroundText>{exportPageLang.AFRICA}</BackgroundText>
        <Container>
          <RegionTitle
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {exportPageLang.ASIA_COUNTRIES}
          </RegionTitle>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <Grid>
              {map(ASIA_COUNTRY, (country, index) => (
                <FlagCard key={index} variants={fadeUp} custom={index * 0.1}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </FlagCard>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>

      {/* ---------------- Europe Section ---------------- */}
      <Section>
        <BackgroundText>{exportPageLang.EUROPE}</BackgroundText>
        <Container>
          <RegionTitle
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {exportPageLang.EUROPE_COUNTRIES}
          </RegionTitle>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="visible"
          >
            <Grid>
              {map(EUROPE_COUNTRY, (country, index) => (
                <FlagCard key={index} variants={fadeUp} custom={index * 0.1}>
                  <img src={country.flag} alt={country.name} />
                  <p>{country.name}</p>
                </FlagCard>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Section>
    </>
  );
};

export default ExportCountrySection;
