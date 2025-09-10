import React from "react";
import styled from "styled-components";
import { map } from "lodash";
import { COUNT_BANNER_1, COUNT_BANNER_2, COUNT_SECTION } from "../config/Constant";

const BannerBand = styled.section`
  width: 100%;
  height: 500px;
  margin: 100px 0;
  background-image: url(${COUNT_BANNER_1});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SmallTile = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  position: absolute;
  bottom: -200px;
  left: 20%;
  transform: translateX(-50%);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const StatsRow = styled.div`
  max-width: 1200px;
  margin: 0 0px 0 600px;
  display: flex;
  gap: 36px;
  justify-content: center;
  align-items: center;
  padding: 28px 20px 40px;
  border-radius: 6px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 20px;
    gap: 18px;
  }
`;

const StatsItem = styled.div`
  text-align: center;
  min-width: 140px;
`;

const StatsNumber = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #111;
`;

const StatsLabel = styled.div`
  font-size: 0.85rem;
  color: #888;
  margin-top: 6px;
`;

const HomeCountSection = () => {
  return (
    <>
      <BannerBand aria-hidden="true">
        <SmallTile src={COUNT_BANNER_2} alt="sample tile" />
      </BannerBand>
      <StatsRow>
        {map(COUNT_SECTION, (item, index) => (
          <StatsItem>
            <StatsNumber>{item.number}</StatsNumber>
            <StatsLabel>{item.label}</StatsLabel>
          </StatsItem>
        ))}
      </StatsRow>
    </>
  );
};

export default HomeCountSection;
