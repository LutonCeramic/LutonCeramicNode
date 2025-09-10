import React from 'react';
import { Layout } from 'antd';
import HeaderPanel from './commons/HeaderPanel';
import Footer from './commons/Footer';
import RoutePath from './Routes/RoutePath';
import styled from 'styled-components';
import { WhatsAppOutlined, PhoneOutlined } from "@ant-design/icons";

const { Content } = Layout;

const StyledContent = styled(Content)`
  margin-top: 120px;
  background: #e8e8e8ff;
  min-height: calc(100vh - 200px);
`;

const FloatingButtons = styled.div`
  position: fixed;
  right: 32px;
  bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  z-index: 100;
`;

const FloatBtn = styled.a`
  background: #149b1aff;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 4px 16px rgba(198, 233, 74, 0.18);
  transition: box-shadow 0.2s, transform 0.2s;
  &:hover {
    box-shadow: 0 8px 32px rgba(198, 233, 74, 0.28);
    transform: scale(1.08);
    color: #111;
  }
`;

const App = () => {
  return (
    <Layout>
      <HeaderPanel />
      <StyledContent>
        <RoutePath />
      </StyledContent>
      <Footer />
      <FloatingButtons>
        <FloatBtn
          href="https://wa.me/919696755555"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsAppOutlined />
        </FloatBtn>
        <FloatBtn href="tel:+919696755555">
          <PhoneOutlined />
        </FloatBtn>
      </FloatingButtons>
    </Layout>
  );
};

export default App;
