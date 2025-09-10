import React from "react";
import styled from "styled-components";
import { Layout, Row, Col, Card, Typography, Image } from "antd";
import { AboutPageLang } from "../lang/AboutPageLang";
import {
  ABOUT_COMPANY_PROFILE,
  ABOUT_MAIN,
  ABOUT_SIDE,
  MADE_IN_INDIA,
} from "../config/Constant";
import {
  Description,
  GlobalFootprintBlock,
  Heading,
  ImageContainer,
  StyledBody,
  TextContainer,
} from "./HomeExportBlock";
import AboutWhyLuton from "./AboutWhyLuton";
import MainImgBlock from "../pages/MainImgBlock";

const { Title, Paragraph } = Typography;

const StyledRow = styled(Row)`
  padding: 40px;
  align-items: center;
`;

const SectionTitle = styled(Title)`
  margin: 40px;
`;

const SectionText = styled(Paragraph)`
  font-size: 16px;
  line-height: 1.7;
  margin: 40px;
`;

const Hero = styled.section`
  display: flex;
  place-items: center;
  text-align: center;
  color: #fff;
`;

const StyledGlobalFootprintBlock = styled(GlobalFootprintBlock)`
  background:rgb(194, 188, 188);
`;

const AboutWhoWeAre = () => {
  return (
    <>
      <MainImgBlock title={AboutPageLang.ABOUT_US} imgLink={ABOUT_MAIN} />
      <Layout>
        <StyledRow gutter={[32, 32]}>
          <Col span={14}>
            <SectionTitle level={1}>{AboutPageLang.ABOUT_US}</SectionTitle>
            <SectionText>
              {AboutPageLang.ABOUT_DESC_1}
              <br />
              <br />
              {AboutPageLang.ABOUT_DESC_2}
            </SectionText>
            <SectionText></SectionText>
          </Col>
          <Col span={10}>
            <Image
              alt="example"
              src={ABOUT_SIDE}
              height={450}
              preview={false}
            />
          </Col>
        </StyledRow>

        <Hero>
          <Card style={{ margin: "50px" }}>
            <SectionTitle>{AboutPageLang.COMPANY_PROFILE}</SectionTitle>
            <Row gutter={[24, 24]} align="middle">
              <Col span={12}>
                <Card>
                  <Image
                    src={ABOUT_COMPANY_PROFILE}
                    height={700}
                    width={700}
                    preview={false}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <SectionText>
                  {AboutPageLang.COMPANY_PROFILE_DESC_1}
                  <br />
                  <br />
                  {AboutPageLang.COMPANY_PROFILE_DESC_2}
                </SectionText>
              </Col>
            </Row>
          </Card>
        </Hero>

        <AboutWhyLuton />

        <StyledGlobalFootprintBlock>
          <Heading>{AboutPageLang.INNOVATION_SIGN}</Heading>
          <StyledBody>
            <ImageContainer src={MADE_IN_INDIA} alt="Export Area" />
            <TextContainer>
              <Description>
              <h4>{AboutPageLang.PRIDE_OF_INDIA}</h4><br />
                {AboutPageLang.PRIDE_OF_INDIA_DESC}
              </Description>
            </TextContainer>
          </StyledBody>
        </StyledGlobalFootprintBlock>
      </Layout>
    </>
  );
};

export default AboutWhoWeAre;
