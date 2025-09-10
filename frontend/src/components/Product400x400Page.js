import React, { useState } from "react";
import { Row, Col, Image, Input, Empty } from "antd";
import { map, filter } from "lodash";
import styled from "styled-components";
import { PRODUCT_400_400, PRODUCT_MAIN } from "../config/Constant";
import ProductCollection from "./ProductCollection";
import { ProductPageLang } from "../lang/ProductPageLang";
import MainImgBlock from "../pages/MainImgBlock";

export const PageContainer = styled.div`
  background: #f7f7f7;
  border: none;
  padding: 40px 0;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 40px 0 20px 0;
  color: #222;
`;

export const SearchBarWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto 40px auto;
  padding: 0 16px;

  .ant-input {
    border-radius: 50px;
    padding: 14px 20px;
    font-size: 1rem;
    border: 1px solid #ddd;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;

    &:focus {
      border-color: #1890ff;
      box-shadow: 0 0 8px rgba(24, 144, 255, 0.3);
    }
  }
`;

export const StyledRow = styled(Row)`
  justify-content: center;
`;

export const StyledColumn = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  padding: 24px;
  margin: 10px;
  border-radius: 12px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
  }

  img {
    object-fit: cover;
    background: #e0e0e0;
    border-radius: 8px;
  }
`;

export const StyledTitle = styled.div`
  text-align: center;
  color: #222;
  font-weight: 600;
  font-size: 1.1rem;
  margin: 16px 0 0 0;
`;

const Product400x400Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = filter(PRODUCT_400_400, (collection) =>
    collection.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <MainImgBlock title={ProductPageLang.PRODUCT_1} imgLink={PRODUCT_MAIN} />

      <PageContainer>
        <SectionTitle>{ProductPageLang.PRODUCT_1}</SectionTitle>

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

export default Product400x400Page;
