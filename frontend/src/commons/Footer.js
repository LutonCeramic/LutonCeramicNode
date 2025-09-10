import React from "react";
import { Row, Col } from "antd";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  GlobalOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { HeaderLang } from "../lang/HeaderLang";
import { routeConstant } from "../config/routeConstant";
import { ContactInfo, StyledIcon } from "./TopHeader";
import { map } from "lodash";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #050c13ff, #0a1118ff);
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
  }
`;

const FooterContent = styled.div`
  padding: 80px 50px 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 60px 20px 30px;
  }
`;

const FooterSection = styled(motion.div)`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 25px;
    text-align: center;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 25px;
  color: white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const CompanyLogo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;

  .anticon {
    color: #4a90e2;
    font-size: 1.1rem;
    margin-right: 12px;
    width: 20px;
  }

  &:hover {
    color: white;
    .anticon {
      color: #357abd;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
  }
`;

const QuickLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4a90e2;
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    padding-left: 0 !important;
  }
`;

const ProductLink = styled(Link)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  margin-bottom: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4a90e2;
    padding-left: 10px;
  }

  @media (max-width: 768px) {
    padding-left: 0 !important;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: linear-gradient(135deg, #4a90e2, #357abd);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
  }
`;

const BottomBar = styled.div`
  background: rgba(0, 0, 0, 0.25);
  padding: 25px 50px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);

  @media (max-width: 768px) {
    padding: 20px 20px;
    text-align: center;
  }
`;

const CopyrightText = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  .company-name {
    color: #4a90e2;
    font-weight: 600;
  }
`;

const CertificationBadges = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    margin: 15px 0;
    flex-wrap: wrap;
  }
`;

const Badge = styled.div`
  background: rgba(255, 255, 255, 0.08);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.15);

  &:hover {
    background: rgba(74, 144, 226, 0.15);
    border-color: #4a90e2;
  }
`;

const Footer = () => {
  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/products", label: "Products" },
    { path: "/contact", label: "Contact Us" },
  ];

  const products = [
    { path: routeConstant.PRODUCT_400x400, label: "400x400 MM Digital Parking Tiles" },
    { path: routeConstant.PRODUCT_500x500, label: "500x500 MM Digital Parking Tiles" },
  ];

  return (
    <FooterContainer>
      <FooterContent>
        <Row gutter={[40, 40]}>
          {/* Company Info */}
          <Col xs={24} sm={12} md={12} lg={6}>
            <FooterSection>
              <CompanyLogo>
                <a href="/">
                  <img src="./logo.png" height="50" width="50" alt="Luton Ceramic Pvt. Ltd." />
                </a>
              </CompanyLogo>
              <p style={{ color: "rgba(255, 255, 255, 0.8)", lineHeight: "1.6", marginBottom: "20px", fontSize: "1rem" }}>
                Leading manufacturer of premium digital parking tiles in India. We combine traditional craftsmanship with modern technology to create durable and aesthetic parking solutions.
              </p>
              <SocialLinks>
                <SocialIcon href="https://www.facebook.com/share/1B7dWXs4Tr/" target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/luton_ceramic?igsh=b29ycjltZ2c2aW51" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialIcon>
              </SocialLinks>
            </FooterSection>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6} lg={4}>
            <FooterSection>
              <SectionTitle>Quick Links</SectionTitle>
              {map(quickLinks, (link, index) => (
                <QuickLink key={index} to={link.path}>{link.label}</QuickLink>
              ))}
            </FooterSection>
          </Col>

          {/* Products */}
          <Col xs={24} sm={12} md={6} lg={6}>
            <FooterSection>
              <SectionTitle>Our Products</SectionTitle>
              {map(products, (product, index) => (
                <ProductLink key={index} to={product.path}>{product.label}</ProductLink>
              ))}
            </FooterSection>
          </Col>

          {/* Contact */}
          <Col xs={24} sm={12} md={12} lg={8}>
            <FooterSection>
              <SectionTitle>Contact Us</SectionTitle>
              <ContactItem>
                <EnvironmentOutlined />
                <div>Srv no.555, Morbi-Jetpar Road,<br />Opp. Viratnagar, At Rangpar,<br />Morbi-2 (Gujarat) INDIA</div>
              </ContactItem>
              <ContactItem>
                <PhoneOutlined />
                <div>{HeaderLang.CONTACT1}<br />{HeaderLang.CONTACT2}</div>
              </ContactItem>
              <ContactItem>
                <MailOutlined />
                <span>{HeaderLang.EMAIL_VALUE}</span>
              </ContactItem>
              <ContactItem>
                <GlobalOutlined />
                <span>Export to 10+ Countries</span>
              </ContactItem>
            </FooterSection>
          </Col>
        </Row>
      </FooterContent>

      <BottomBar>
        <Row justify="space-between" align="middle" gutter={[20, 20]}>
          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <CopyrightText>
              © 2025 <span className="company-name">Luton Ceramic Pvt. Ltd.</span> All rights reserved. Manufacturing Excellence Since 2016.
            </CopyrightText>
          </Col>

          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <CertificationBadges>
              <Badge>ISO Certified</Badge>
              <Badge>Export Quality</Badge>
              <Badge>Made in India</Badge>
            </CertificationBadges>
          </Col>

          <Col xs={24} md={8} style={{ textAlign: "center" }}>
            <ContactInfo>
              <a href="https://wa.me/919484990960" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <ContactItem>DESIGN BY:&nbsp; <StyledIcon component={PhoneFilled} /> Tirth Patoliya</ContactItem>
              </a>
              <a href="https://wa.me/916355189178" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
                <ContactItem><StyledIcon component={PhoneFilled} /> Riddhi Patoliya</ContactItem>
              </a>
            </ContactInfo>
          </Col>
        </Row>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
