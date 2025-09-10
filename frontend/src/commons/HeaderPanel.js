import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { Menu, Drawer, Button, Layout } from "antd";
import { MenuOutlined, DownOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import { HeaderLang } from "../lang/HeaderLang";
import { routeConstant } from "../config/routeConstant";
import { LUTON_LOGO } from "../config/Constant";

const { Header } = Layout;

const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const HeaderWrapper = styled(Header)`
  background: #000000 !important;
  color: #ffffff !important;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px !important;
  height: 100px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 70px;
  }
`;

const Logo = styled.img`
  display: block;
  height: 70px;
  width: auto;

  @media (max-width: 1024px) {
    height: 60px;
  }
  @media (max-width: 768px) {
    height: 50px;
  }
  @media (max-width: 480px) {
    height: 40px;
  }
`;

const DesktopMenu = styled(Menu)`
  display: flex !important;
  color: #fff !important;
  background: transparent;
  border-bottom: none;
  justify-content: flex-end;
  flex: 1;

  .ant-menu-item,
  .ant-menu-submenu-title {
    color: #ffffff !important;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const MobileMenuButton = styled(Button)`
  display: none;
  background: transparent;
  color: #fff;
  border: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 26px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Better Mobile Menu styling
const MobileMenu = styled(Menu)`
  width: 100%;
  background: transparent;
  border: none;
  padding-top: 40px;

  .ant-menu-item,
  .ant-menu-submenu-title {
    margin: 12px 0;
    color: #ffffff !important;
    font-size: 20px;
    font-weight: 600;
    text-align: left;
    padding: 12px 16px;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #ffcc00 !important;
  }

  .ant-menu-item-selected {
    background: rgba(255, 204, 0, 0.15);
    color: #ffcc00 !important;
  }
`;

const HeaderPanel = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const menuItems = useMemo(
    () => (
      <>
        <Menu.Item key={routeConstant.HOME}>
          <Link to={routeConstant.HOME}>{HeaderLang.HOME}</Link>
        </Menu.Item>
        <Menu.SubMenu
          title={
            <span>
              {HeaderLang.ABOUT_US}
              <DownOutlined />
            </span>
          }
        >
          <Menu.Item key={routeConstant.ABOUT}>
            <Link to={routeConstant.ABOUT}>{HeaderLang.WHO_WE_ARE}</Link>
          </Menu.Item>
          <Menu.Item key={routeConstant.INFRASTRUCTURE}>
            <Link to={routeConstant.INFRASTRUCTURE}>{HeaderLang.INFRASTRUCTURE}</Link>
          </Menu.Item>
          <Menu.Item key={routeConstant.TECHNICAL_SPECIFICATION}>
            <Link to={routeConstant.TECHNICAL_SPECIFICATION}>
              {HeaderLang.TECHNICAL_SPECIFICATION}
            </Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key={routeConstant.COLLECTION}>
          <Link to={routeConstant.COLLECTION}>{HeaderLang.COLLECTION}</Link>
        </Menu.Item>
        <Menu.Item key={routeConstant.EXPORT}>
          <Link to={routeConstant.EXPORT}>{HeaderLang.EXPORT}</Link>
        </Menu.Item>
        <Menu.SubMenu
          title={
            <span>
              {HeaderLang.CATALOGUE}
              <DownOutlined />
            </span>
          }
        >
          <Menu.Item key={routeConstant.CATALOGUE_400X400}>
            <Link to={routeConstant.CATALOGUE_400X400}>
              {HeaderLang.CATALOGUE_400X400}
            </Link>
          </Menu.Item>
          <Menu.Item key={routeConstant.CATALOGUE_500X500}>
            <Link to={routeConstant.CATALOGUE_500X500}>
              {HeaderLang.CATALOGUE_500X500}
            </Link>
          </Menu.Item>
          <Menu.Item key={routeConstant.E_CATALOGUE}>
            <Link to={routeConstant.E_CATALOGUE}>{HeaderLang.E_CATALOGUE}</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Item key={routeConstant.CONTACT}>
          <Link to={routeConstant.CONTACT}>{HeaderLang.CONTACT_US}</Link>
        </Menu.Item>
      </>
    ),
    []
  );

  return (
    <HeaderContainer>
      <TopHeader />
      <HeaderWrapper>
        {/* Logo */}
        <Link to="/">
          <Logo src={LUTON_LOGO} alt="Logo" />
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav>
          <DesktopMenu mode="horizontal" selectedKeys={[location.pathname]}>
            {menuItems}
          </DesktopMenu>
        </DesktopNav>

        {/* Mobile Menu Button */}
        <MobileMenuButton
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />

        {/* Fullscreen Drawer for Mobile */}
        <Drawer
          placement="right"
          onClose={() => setVisible(false)}
          open={visible}
          width="100%"
          bodyStyle={{
            padding: "0",
            height: "100vh",
            backgroundColor: "#000000",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MobileMenu
            onClick={() => setVisible(false)}
            selectedKeys={[location.pathname]}
          >
            {menuItems}
          </MobileMenu>
        </Drawer>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default HeaderPanel;
