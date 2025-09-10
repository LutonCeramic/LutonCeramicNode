import React from "react";
import { Card, Row, Col, Tooltip } from "antd";
import { motion } from "framer-motion";
import styled from "styled-components";
import { FilePdfOutlined } from "@ant-design/icons";
import { CATALOUGE_COLLECTION_400_400 } from "../config/Constant";
import { map } from "lodash";
import MainImgBlock from "../pages/MainImgBlock";
import { CatalogueLang } from "../lang/CatalogueLang";

export const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f9fafb 0%, #edf2f7 100%);
  padding: 100px 20px 60px;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 60px;
  background: linear-gradient(90deg,rgb(160, 211, 67), #3182ce);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const CollectionGrid = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

export const CollectionCard = styled(motion(Card))`
  border: none;
  border-radius: 20px;
  overflow: hidden;
  background: #ffffffee;
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
  position: relative;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.12);
  }

  .ant-card-cover {
    width: 100%;
    height: 240px;
    overflow: hidden;
    position: relative;
    background: #f1f5f9;
  }

  .tile-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .ant-card-body {
    padding: 20px;
    text-align: center;
    position: relative;
  }

  .collection-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0;
    color: #1e293b;
  }
`;

export const DownloadIcon = styled(FilePdfOutlined)`
  font-size: 18px;
  color: #ffffff;
  background: #2b6cb0;
  padding: 6px;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2) rotate(10deg);
    color: #2b6cb0;
    background: #ffffff;
    // background: linear-gradient(135deg, #2b6cb0, #3182ce);
    box-shadow: 0 6px 18px rgba(43, 108, 176, 0.35);
  }
`;

const Catalogue400x400Page = () => {
  const handleDownload = (filePath) => {
    window.open(filePath, "_blank");
  };

  return (
    <>
      <MainImgBlock
        title={CatalogueLang.CATALOGUE_1}
        imgLink={"slider/slider2.jpg"}
      />

      <PageContainer>
        <SectionTitle>{CatalogueLang.CATALOGUE_1}</SectionTitle>
        <CollectionGrid>
          <Row gutter={[30, 30]}>
            {map(CATALOUGE_COLLECTION_400_400, (collection, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <CollectionCard
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  hoverable
                >
                  <div className="ant-card-cover">
                    {collection.image && (
                      <img
                        src={collection.image}
                        alt={collection.title}
                        className="tile-preview"
                      />
                    )}
                  </div>
                  <Tooltip title="Download PDF">
                    <DownloadIcon
                      onClick={() => handleDownload(collection.pdfPath)}
                    />
                  </Tooltip>

                  <div className="ant-card-body">
                    <div className="collection-title">{collection.title}</div>
                  </div>
                </CollectionCard>
              </Col>
            ))}
          </Row>
        </CollectionGrid>
      </PageContainer>
    </>
  );
};

export default Catalogue400x400Page;
