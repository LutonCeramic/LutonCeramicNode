// TopHeader.js
import React from "react";
import styled from "styled-components";
import Icon, {
  WhatsAppOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { HeaderLang } from "../lang/HeaderLang";

const TopBar = styled.div`
  position: relative;
  background: #ffffff;
  color: #000000;
  padding: 8px 0;
  border-bottom: 1px solid #333;
  font-size: 14px;
  cursor: pointer;
  width: 100%;
  z-index: 1200;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TopBarContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    padding: 0 20px;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    gap: 12px;
    font-size: 13px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  transition: color 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

export const StyledIcon = styled(Icon)`
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    color: #000000;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 18px;

  @media (max-width: 1200px) {
    gap: 12px;
  }
`;

const TopHeader = () => {
  return (
    <TopBar>
      <TopBarContent>
        {/* Left side - Contact */}
        <ContactInfo>
          <a
            href="https://wa.me/919696755555"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ContactItem>
              <StyledIcon component={PhoneFilled} />
              {HeaderLang.CONTACT1}
            </ContactItem>
          </a>
          <a
            href="https://wa.me/917574855511"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ContactItem>
              <StyledIcon component={PhoneFilled} />
              {HeaderLang.CONTACT2}
            </ContactItem>
          </a>
          <a
            href="mailto:lutonceramic@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ContactItem>
              <StyledIcon component={MailFilled} />
              {HeaderLang.EMAIL_VALUE}
            </ContactItem>
          </a>
        </ContactInfo>

        {/* Right side - Social Links */}
        <SocialLinks>
          <a
            href="https://wa.me/919696755555"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppOutlined style={{ fontSize: "20px", color: "#25D366" }} />
          </a>

          <a
            href="https://www.facebook.com/share/1B7dWXs4Tr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookFilled style={{ fontSize: "20px", color: "#1877F2" }} />
          </a>

          <a
            href="https://www.instagram.com/luton_ceramic?igsh=b29ycjltZ2c2aW51"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramFilled style={{ fontSize: "20px", color: "#C13584" }} />
          </a>

          <LinkedinFilled style={{ fontSize: "20px", color: "#0A66C2" }} />
        </SocialLinks>
      </TopBarContent>
    </TopBar>
  );
};

export default TopHeader;
