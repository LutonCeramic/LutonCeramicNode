import React from "react";
import { Row, Col, Tooltip } from "antd";
import { CATALOUGE_COLLECTION_500_500 } from "../config/Constant";
import { map } from "lodash";
import MainImgBlock from "../pages/MainImgBlock";
import { CatalogueLang } from "../lang/CatalogueLang";
import { CollectionCard, CollectionGrid, DownloadIcon, PageContainer, SectionTitle } from "./Catalogue400x400Page";

const Catalogue500x500Page = () => {
  const handleDownload = (filePath) => {
    window.open(filePath, "_blank");
  };

  return (
    <>
      <MainImgBlock
        title={CatalogueLang.CATALOGUE_2}
        imgLink={"slider/slider7.jpg"}
      />

      <PageContainer>
        <SectionTitle>{CatalogueLang.CATALOGUE_2}</SectionTitle>
        <CollectionGrid>
          <Row gutter={[30, 30]}>
            {map(CATALOUGE_COLLECTION_500_500, (collection, index) => (
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

export default Catalogue500x500Page;
