// src/components/HomeSlider.js
import React from "react";
import { Carousel, Button } from "antd";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { SLIDES } from "../config/Constant";
import { map } from "lodash";

// Ken Burns zoom in/out animation
const kenBurns = keyframes`
  0% { transform: scale(1) translate(0,0);}
  50% { transform: scale(1.1) translate(2%, 2%);}
  100% { transform: scale(1) translate(0,0);}
`;

// Hero wrapper
const Hero = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  .ant-carousel,
  .ant-carousel .slick-slider,
  .ant-carousel .slick-list,
  .ant-carousel .slick-track,
  .ant-carousel .slick-slide {
    height: 100%;
  }

  .slick-dots {
    bottom: 20px;
  }

  .slick-dots li button {
    background: #fff !important;
    opacity: 0.7;
  }
  .slick-dots li.slick-active button {
    background: #ff6f61 !important;
  }

  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (max-width: 480px) {
    min-height: 60vh;
  }
`;

// Slide wrapper
const SlideImageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 70vh;
  }
  @media (max-width: 480px) {
    min-height: 60vh;
  }
`;

// Image animation
const SlideImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
  animation: ${kenBurns} 15s ease-in-out infinite;
`;

// Text overlay
const SlideContent = styled(motion.div)`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -40%);
  color: white;
  z-index: 2;
  text-align: center;
  max-width: 700px;
  padding: 0 20px;

  h1 {
    font-size: 52px;
    margin-bottom: 15px;
    font-weight: 700;
    text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.6);
  }

  p {
    font-size: 20px;
    margin-bottom: 30px;
    text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    button {
      font-weight: 600;
      padding: 14px 32px;
      font-size: 16px;
      transition: all 0.3s ease;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
      border: none;
      border-radius: 6px;
    }

    .primary-btn {
      background: #ff6f61;
      color: white;
    }
    .primary-btn:hover {
      background: rgba(255, 255, 255, 0.9);
      color: #ff6f61;
      transform: scale(1.05);
    }

    .secondary-btn {
      background: rgba(255, 255, 255, 0.9);
      color: #ff6f61;
    }
    .secondary-btn:hover {
      background: #ff6f61;
      color: white;
      transform: scale(1.05);
    }
  }

  @media (max-width: 768px) {
    top: 35%;
    h1 {
      font-size: 34px;
    }
    p {
      font-size: 16px;
    }
    .buttons button {
      padding: 12px 24px;
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    top: 30%;
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 14px;
    }
    .buttons {
      flex-direction: column;
      gap: 12px;
    }
    .buttons button {
      width: 100%;
      white-space: normal; /* Allow text to wrap */
      word-wrap: break-word;
      font-size: 14px;
      padding: 12px 16px;
    }
  }

  @media (max-width: 360px) {
    .buttons button {
      font-size: 13px;
      padding: 10px 12px;
    }
  }
`;

const effects = [
  { scale: [1.05, 1], x: ["-2%", "0%"], rotateY: 0 },
  { scale: [1.05, 1], x: ["2%", "0%"], rotateY: 180 },
  { scale: [0.95, 1], x: 0, rotateZ: 360 },
  { scale: [1, 1], x: 0, rotateX: [90, 0] },
];

const HomeSlider = () => {
  return (
    <Hero>
      <Carousel autoplay autoplaySpeed={5000} dots arrows={false} pauseOnHover={false}>
        {map(SLIDES, (item, idx) => (
          <SlideImageWrapper key={idx}>
            <SlideImage
              src={item.img}
              alt={`slide-${idx}`}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                scale: effects[idx % effects.length].scale,
                x: effects[idx % effects.length].x,
                rotateX: effects[idx % effects.length].rotateX || 0,
                rotateY: effects[idx % effects.length].rotateY || 0,
                rotateZ: effects[idx % effects.length].rotateZ || 0,
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
            <SlideContent
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h1>{item.title}</h1>
              <p>{item.subtitle}</p>
              <div className="buttons">
                <Button
                  className="primary-btn"
                  size="large"
                  onClick={() =>
                    window.open(
                      "/catalogues/E_CATALOGUE_13_06_2025.pdf",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  Download E-Catalogue
                </Button>
                <Button
                  className="secondary-btn"
                  size="large"
                  onClick={() =>
                    window.open(item.productLink, "_blank", "noopener,noreferrer")
                  }
                >
                  Visit Product Catalogue
                </Button>
              </div>
            </SlideContent>
          </SlideImageWrapper>
        ))}
      </Carousel>
    </Hero>
  );
};

export default HomeSlider;
