import React from "react";
import ProductCollection from "../components/ProductCollection";
import { ProductPageLang } from "../lang/ProductPageLang";
import MainImgBlock from "./MainImgBlock";
import { PRODUCT_MAIN } from "../config/Constant";

const ProductPage = () => {
  return (
    <>
      <MainImgBlock title={ProductPageLang.COLLECTION} imgLink={PRODUCT_MAIN} />
      <ProductCollection />
    </>
  );
};

export default ProductPage;
