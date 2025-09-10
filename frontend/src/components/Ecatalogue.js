import React from "react";
import { Row, Col, Tooltip } from "antd";
import { E_CATALOGUE_COLLECTION } from "../config/Constant";
import { map } from "lodash";
import MainImgBlock from "../pages/MainImgBlock";
import { CatalogueLang } from "../lang/CatalogueLang";
import {
  CollectionCard,
  CollectionGrid,
  DownloadIcon,
  PageContainer,
  SectionTitle,
} from "./Catalogue400x400Page";

const Ecatalogue = () => {
  const handleDownload = (filePath) => {
    window.open(filePath, "_blank");
  };

  return (
    <>
      <MainImgBlock
        title={CatalogueLang.E_CATALOGUE}
        imgLink={"slider/slider1.jpg"}
      />

      <PageContainer>
        <SectionTitle>{CatalogueLang.E_CATALOGUE}</SectionTitle>
        <CollectionGrid>
          <Row gutter={[30, 30]}>
            {map(E_CATALOGUE_COLLECTION, (collection, index) => (
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

export default Ecatalogue;
