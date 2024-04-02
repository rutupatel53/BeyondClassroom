import React from "react";
import { useState } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const LeftMenu = ({ mode }) => {
  const [menu, setMenu] = useState("AdminPanel");
  const navigate = useNavigate();

  return (
    <Menu mode={mode}>
      <Menu.Item
        key="AdminPanel"
        onClick={() => {
          setMenu("AdminPanel");
          navigate("/adminpanel");
        }}
      >
        AdminPanel
      </Menu.Item>
      <Menu.Item
        className="w-24"
        key="AddProblem"
        onClick={() => {
          setMenu("AddProblem");
          navigate("/AddProblem");
        }}
      >
        AddProblem
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
