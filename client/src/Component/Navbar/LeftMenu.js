import React from "react";
import { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const LeftMenu = ({ mode }) => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();

  return (
    <Menu mode={mode}>
      <Menu.Item
        key="Home"
        onClick={() => {
          setMenu("Home");
          navigate("/");
        }}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="Courses"
        onClick={() => {
          setMenu("Courses");
          navigate("/Courses");
        }}
      >
        Courses
      </Menu.Item>
      <Menu.Item
        key="Practice"
        onClick={() => {
          setMenu("Practice");
          navigate("/practice");
        }}
      >
        Practice
      </Menu.Item>
      <Menu.SubMenu key="Projects" title="projects">
        <Menu.Item
          key="Software"
          onClick={() => {
            setMenu("Software");
            navigate("/Software");
          }}
        >
          Software
        </Menu.Item>
        <Menu.Item
          key="Hardware"
          onClick={() => {
            setMenu("Hardware");
            navigate("/Hardware");
          }}
        >
          Hardware
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default LeftMenu;
