// ContactUsPage.js
import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Typography,
  Card,
  Image,
  Button,
  Modal,
} from "antd";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { ContactUsLang } from "../lang/ContactUsLang";
import MainImgBlock from "./MainImgBlock";
import { ABOUT_SIDE } from "../config/Constant";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

/* 🔹 Animations */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`;

/* 🔹 Styled Components */
const Banner = styled.div`
  background: rgb(143, 139, 139);
  text-align: center;
  padding: 100px 20px 140px;
  position: relative;
  overflow: hidden;

  h2,
  p {
    color: white !important;
  }
`;

const ContentWrapper = styled.div`
  background: #f7f7f7;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const ContactFormCard = styled(Card)`
  border-radius: 18px;
  backdrop-filter: blur(15px);
  text-align: center;
  background: #fff !important;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  margin-top: -150px;
  z-index: 2;
  position: relative;
  padding: 30px 25px;
  transition: all 0.4s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 50px rgba(0, 0, 0, 0.18);
  }

  @media (max-width: 768px) {
    margin-top: -160px;
    padding: 20px 15px;
  }
`;

const SectionWrapper = styled.div`
  background: #e0e0e0;
  padding: 80px 20px;

  @media (max-width: 768px) {
    padding: 50px 15px;
  }
`;

const InfoCard = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  background: #fff;
  padding: 20px;
  border-radius: 14px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px) scale(1.03);
    box-shadow: 0 6px 35px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 576px) {
    flex-direction: column;
    text-align: center;
  }
`;

const IconCircle = styled.div`
  min-width: 65px;
  min-height: 65px;
  border-radius: 50%;
  background: linear-gradient(135deg, #222, #444);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: white;
  margin-right: 18px;
  animation: ${pulse} 3s infinite ease-in-out;

  @media (max-width: 576px) {
    margin: 0 0 12px 0;
  }
`;

/* 🔹 Component */
const ContactUsPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [modal, contextHolder] = Modal.useModal(); // modal instance

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("https://api.lutonceramic.com/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        form.resetFields();
        modal.success({
          title: "Email Sent",
          content: "Your message has been sent successfully.",
        });
      } else {
        modal.error({
          title: "Email Failed",
          content: data.message || "Something went wrong, please try again.",
        });
      }
    } catch (err) {
      console.error("Request Error:", err);
      modal.error({
        title: "Error",
        content: "Unable to send email. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder} {/* 🔹 needed for modal popups */}

      <MainImgBlock
        title={ContactUsLang.CONTACT_US}
        imgLink={"slider/slider2.jpg"}
      />

      <Banner>
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <Title
            level={2}
            style={{
              fontSize: "38px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            {ContactUsLang.QUERIES}
          </Title>
          <Title level={4} style={{ fontSize: 18, opacity: 0.85 }}>
            {ContactUsLang.REACH_OUT}
          </Title>
        </motion.div>
      </Banner>

      {/* 🔹 Contact Form Section */}
      <ContentWrapper>
        <Row gutter={[40, 40]} justify="center" align="middle">
          <Col xs={24} md={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <Image
                src={ABOUT_SIDE}
                preview={false}
                style={{
                  borderRadius: "16px",
                  boxShadow: "0 12px 45px rgba(0,0,0,0.2)",
                  width: "100%",
                }}
              />
            </motion.div>
          </Col>

          <Col xs={24} md={12}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <ContactFormCard>
                <Title
                  level={4}
                  style={{
                    marginBottom: 25,
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "#111",
                  }}
                >
                  {ContactUsLang.GET_IN_TOUCH}
                </Title>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Form.Item
                    name="name"
                    label={ContactUsLang.NAME}
                    rules={[{ required: true, message: "Please enter your name" }]}
                  >
                    <Input size="large" placeholder="John Doe" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    label={ContactUsLang.EMAIL}
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Please enter a valid email",
                      },
                    ]}
                  >
                    <Input size="large" placeholder="example@email.com" />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label={ContactUsLang.CONTACT}
                    rules={[
                      { required: true, message: "Please enter your phone number" },
                    ]}
                  >
                    <Input size="large" placeholder="+91 98765 43210" />
                  </Form.Item>
                  <Form.Item
                    name="city"
                    label={ContactUsLang.CITY}
                    rules={[{ required: true, message: "Please enter your city" }]}
                  >
                    <Input size="large" placeholder="Your City" />
                  </Form.Item>
                  <Form.Item name="message" label={ContactUsLang.MESSGAE}>
                    <TextArea rows={4} placeholder="Write your message here..." />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      size="large"
                      block
                      loading={loading}
                      disabled={loading}
                    >
                      {loading ? "Sending..." : ContactUsLang.SUBMIT}
                    </Button>
                  </Form.Item>
                </Form>
              </ContactFormCard>
            </motion.div>
          </Col>
        </Row>
      </ContentWrapper>

      {/* 🔹 Info Section */}
      <SectionWrapper>
        <Row gutter={[40, 40]} justify="center" align="top">
          <Col xs={24} md={14}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
            >
              <Title
                level={3}
                style={{
                  letterSpacing: "2px",
                  margin: "0 auto 30px",
                  color: "#111",
                  maxWidth: "640px",
                  textAlign: "center",
                }}
              >
                {ContactUsLang.WHAT_WE_ARE}
              </Title>
              <Paragraph
                style={{
                  maxWidth: "640px",
                  margin: "0 auto 30px",
                  fontSize: "16px",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {ContactUsLang.WE_ARE}
              </Paragraph>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.201194171526!2d70.886196!3d22.940623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598a1258e0f36d%3A0x9ca5edcf17aca71a!2sLuton%20Ceramic%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1693470000000!5m2!1sen!2sin"
                width="100%"
                height="350"
                style={{
                  border: 0,
                  borderRadius: "14px",
                  boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
                }}
                allowFullScreen=""
                loading="lazy"
                title="Luton Ceramic Pvt. Ltd. Location"
              ></iframe>
            </motion.div>
          </Col>

          <Col xs={24} md={10}>
            <InfoCard whileHover={{ scale: 1.05, rotate: 1 }}>
              <IconCircle>
                <EnvironmentOutlined />
              </IconCircle>
              <div>
                <Title level={4}>{ContactUsLang.ADDRESS}</Title>
                <Paragraph>{ContactUsLang.ADDRESSVALUE}</Paragraph>
              </div>
            </InfoCard>

            <InfoCard whileHover={{ scale: 1.05, rotate: -1 }}>
              <IconCircle>
                <PhoneOutlined />
              </IconCircle>
              <div>
                <Title level={4}>{ContactUsLang.CONTACT}</Title>
                <Paragraph>{ContactUsLang.PHONE1}</Paragraph>
                <Paragraph>{ContactUsLang.PHONE2}</Paragraph>
              </div>
            </InfoCard>

            <InfoCard whileHover={{ scale: 1.05, rotate: 1 }}>
              <IconCircle>
                <MailOutlined />
              </IconCircle>
              <div>
                <Title level={4}>{ContactUsLang.EMAIL}</Title>
                <Paragraph>{ContactUsLang.EMAILVALUE}</Paragraph>
              </div>
            </InfoCard>
          </Col>
        </Row>
      </SectionWrapper>
    </>
  );
};

export default ContactUsPage;
