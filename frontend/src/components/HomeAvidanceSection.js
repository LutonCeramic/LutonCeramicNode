import React from "react";
import styled from "styled-components";
import { AVIDANCE_DATA } from "../config/Constant";
import { HomePageLang } from "../lang/HomePageLang";
import { map } from "lodash";

const EvidenceSection = styled.section`
  width: 100%;
  padding: 64px 0;
  background: #fff;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #222;
  font-weight: 600;
  margin-bottom: 48px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    height: 2px;
    width: 900px;
    background: #ccc;
    margin: 12px auto 0;
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const Item = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.3s ease;
    box-shadow: 0 4px 10px rgba(14, 7, 7, 0.08);

    &:hover {
      transform: scale(1.03);
    }
  }

  p {
    margin-top: 12px;
    font-weight: 500;
    font-size: 1rem;
    color: #333;
    display: inline-block;
    padding-bottom: 4px;
  }
`;

const HomeAvidanceSection = () => {
  return (
    <EvidenceSection>
      <SectionTitle>{HomePageLang.IN_AVIDANCE}</SectionTitle>
      <GridContainer>
        {map(AVIDANCE_DATA, (item, index) => (
          <Item key={index}>
            <a href={item.link} rel="noopener noreferrer">
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            </a>
          </Item>
        ))}
      </GridContainer>
    </EvidenceSection>
  );
};

export default HomeAvidanceSection;
