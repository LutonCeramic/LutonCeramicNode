import React from "react";
import styled from "styled-components";
import { CERTIFICATIONS } from "../config/Constant";
import { map } from "lodash";
import { exportPageLang } from "../lang/ExportPageLang";

const Section = styled.section`
  padding: 60px 20px;
  background: #f9f9f9;
  text-align: center;

  h4 {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px; /* space between certificates */

  @media (max-width: 992px) {
    gap: 30px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const CertItem = styled.div`
  flex: 1 1 150px; /* grows, shrinks, base width */
  max-width: 200px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const CertificationsGrid = () => {
  return (
    <Section>
      <h4>{exportPageLang.OUR_CERTIFICATIONS}</h4>
      <Grid>
        {map(CERTIFICATIONS, (cert, index) => (
          <CertItem key={index}>
            <img src={cert.src} alt={cert.alt} />
          </CertItem>
        ))}
      </Grid>
    </Section>
  );
};

export default CertificationsGrid;
