import React from 'react';
import { Button } from 'antd';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HomeOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { CommonLang } from '../lang/CommonLang';
import { routeConstant } from '../config/routeConstant';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #222 0%, #f7f7f7 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 20px 80px;
`;

const NotFoundContent = styled(motion.div)`
  text-align: center;
  max-width: 600px;
`;

const NotFoundNumber = styled(motion.h1)`
  font-size: 12rem;
  font-weight: 900;
  margin: 0;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  
  @media (max-width: 768px) {
    font-size: 8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 6rem;
  }
`;

const NotFoundTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 20px 0;
  color: #1e293b;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const NotFoundDescription = styled(motion.p)`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 40px;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  height: 50px;
  padding: 0 30px;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  &.primary {
    background: linear-gradient(135deg, #222, #444);
    border: none;
    color: white;
    box-shadow: 0 6px 20px rgba(34, 34, 34, 0.18);
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(34, 34, 34, 0.25);
    }
  }
  &.secondary {
    background: transparent;
    color: #222;
    border: 2px solid #222;
    &:hover {
      background: #222;
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const NotFoundPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageContainer>
      <NotFoundContent
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <NotFoundNumber variants={itemVariants}>
          404
        </NotFoundNumber>
        
        <NotFoundTitle variants={itemVariants}>
          {CommonLang.PAGE_NOT_FOUND}
        </NotFoundTitle>
        
        <NotFoundDescription variants={itemVariants}>
          {CommonLang.SOMETHING_WENT_WORNG}
        </NotFoundDescription>
        
        <ButtonGroup variants={itemVariants}>
          <Link to={routeConstant.HOME}>
            <StyledButton type="primary" className="primary" size="large">
              <HomeOutlined />
              {CommonLang.BACK_TO_HOME}
            </StyledButton>
          </Link>
          
          <StyledButton className="secondary" size="large" onClick={() => window.history.back()}>
            <ArrowLeftOutlined />
            Go Back
          </StyledButton>
        </ButtonGroup>
      </NotFoundContent>
    </PageContainer>
  );
};

export default NotFoundPage;
