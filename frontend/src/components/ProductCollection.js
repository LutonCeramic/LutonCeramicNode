// src/components/CollectionSection.js
import React from "react";
import styled, { keyframes } from "styled-components";
import { Image } from "antd";
import { ProductPageLang } from "../lang/ProductPageLang";
import { COLLECTION_ITEM } from "../config/Constant";
import { map } from "lodash";

// Decorative dots animation
const float = keyframes`
  0% { transform: translateY(0px); opacity: 0.7; }
  50% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(0px); opacity: 0.7; }
`;

const Section = styled.section`
  position: relative;
  padding: 100px 20px;
  background: #f9f9f9;
  overflow: hidden;

  /* Decorative dots & lines */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: #ff7e5f33;
    width: 15px;
    height: 15px;
    top: 10%;
    left: 5%;
    animation: ${float} 6s ease-in-out infinite;
  }

  &::after {
    width: 25px;
    height: 25px;
    top: 70%;
    left: 80%;
    animation-delay: 3s;
  }

  .sec-title {
    text-align: center;
    margin-bottom: 60px;

    p {
      font-size: 18px;
      line-height: 1.9;
      max-width: 900px;
      margin: 0 auto 25px;
      color: #666;
      font-family: "Poppins", sans-serif;
    }

    h2 {
      font-size: 48px;
      margin-top: 10px;
      font-weight: 800;
      background: linear-gradient(90deg, #ff7e5f, #feb47b);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: relative;
      display: inline-block;

      &::after {
        content: "";
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #ff7e5f, #feb47b);
        display: block;
        margin: 12px auto 0;
        border-radius: 2px;
      }
    }
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: row;
  gap: 200px;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

const Item = styled.div`
  background: #ffffff;
  border-radius: 25px;
  overflow: hidden;
  text-align: center;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  width: 100%;
  max-width: 400px;
  cursor: pointer;
  position: relative;

  &:hover {
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0px 25px 45px rgba(0, 0, 0, 0.2);

    .overlay {
      opacity: 1;
    }

    .content p a {
      color: #ff7e5f;
      transform: translateY(-5px);
    }
  }

  .image {
    position: relative;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.5s ease, filter 0.5s ease;
      border-bottom: 1px solid #eee;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 126, 95, 0.15);
    opacity: 0;
    transition: opacity 0.5s ease;
    border-radius: 25px;
  }

  .content {
    padding: 25px 20px;

    p {
      margin: 12px 0 18px;
      font-size: 20px;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      transition: transform 0.3s ease;

      a {
        text-decoration: none;
        color: #333;
        transition: color 0.3s, transform 0.3s;
      }
    }

    .underline {
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, #ff7e5f, #feb47b);
      margin: 0 auto;
      border-radius: 2px;
    }
  }
`;

const floatText = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  25% { transform: translate(50%, -40%) rotate(10deg); }
  50% { transform: translate(50%, 50%) rotate(0deg); }
  75% { transform: translate(-50%, 40%) rotate(-10deg); }
  100% { transform: translate(-50%, -50%) rotate(0deg); }
`;

const BackgroundText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 180px;
  font-weight: 900;
  color: rgb(233, 230, 230);
  white-space: nowrap;
  pointer-events: none;
  z-index: 0;
  animation: ${floatText} 20s linear infinite;
`;

const ProductCollection = () => {
  return (
    <Section>
      <div className="sec-title">
        <p>{ProductPageLang.PRODUCT_DESC}</p>
        <h2>{ProductPageLang.OUR_COLLECTION}</h2>
      </div>
      <BackgroundText>{ProductPageLang.COLLECTION}</BackgroundText>

      <Grid>
        {map(COLLECTION_ITEM, (item, index) => (
          <Item key={index}>
            <a href={item.link}>
              <div className="image">
                <Image src={item.img} alt={item.title} preview={false} />
                <div className="overlay"></div>
              </div>
              <div className="content">
                <p>{item.title}</p>
                <div className="underline"></div>
              </div>
            </a>
          </Item>
        ))}
      </Grid>
    </Section>
  );
};

export default ProductCollection;
