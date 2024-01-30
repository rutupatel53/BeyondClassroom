import React from "react";
import { Menu, Avatar, message } from "antd";
import {
  UserOutlined,
  CodeOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const setMenu = "home";
const RightMenu = ({ mode }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username"></span>
          </>
        }
      >
        <Menu.Item
          key="login"
          onClick={() => {
            setMenu("login");
            navigate("/login");
          }}
        >
          <LoginOutlined /> login
        </Menu.Item>
        <Menu.Item
          key="Facultylogin"
          onClick={() => {
            setMenu("Facultylogin");
            navigate("/FacultyLogin");
          }}
        >
          <LoginOutlined /> Faculty login
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
