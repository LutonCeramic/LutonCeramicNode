import React, { useState } from "react";
import { Empty, Image, Input } from "antd";
import { filter, map } from "lodash";
import { PRODUCT_500_500, PRODUCT_MAIN } from "../config/Constant";
import ProductCollection from "./ProductCollection";
import { ProductPageLang } from "../lang/ProductPageLang";
import MainImgBlock from "../pages/MainImgBlock";
import { PageContainer, SearchBarWrapper, SectionTitle, StyledColumn, StyledRow, StyledTitle } from "./Product400x400Page";

const Product500x500Page = () => {

    const [searchTerm, setSearchTerm] = useState("");
  
    // Filter products based on search term
    const filteredProducts = filter(PRODUCT_500_500, (collection) =>
      collection.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <MainImgBlock title={ProductPageLang.PRODUCT_2} imgLink={PRODUCT_MAIN} />

      <PageContainer>
        <SectionTitle>{ProductPageLang.PRODUCT_2}</SectionTitle>

        {/* Search Bar */}
        <SearchBarWrapper>
          <Input
            placeholder="🔍 Search by Design Number (e.g. 5006)"
            allowClear
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="large"
          />
        </SearchBarWrapper>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <StyledRow gutter={[24, 24]}>
            {map(filteredProducts, (collection, index) => (
              <StyledColumn
                key={index}
                xs={24}
                sm={12}
                md={8}
                lg={6}
                xl={5}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  height={250}
                  width={250}
                />
                <StyledTitle>{collection.title}</StyledTitle>
              </StyledColumn>
            ))}
          </StyledRow>
        ) : (
          <Empty
            description="No designs found"
            style={{ marginTop: "40px" }}
          />
        )}
      </PageContainer>

      <ProductCollection />
    </>
  );
};

export default Product500x500Page;
