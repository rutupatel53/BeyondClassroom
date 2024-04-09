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
        key="AddEvent"
        onClick={() => {
          setMenu("AddEvent");
          navigate("/AddEvent");
        }}
      >
        AddEvent
      </Menu.Item>
      <Menu.Item
        className="w-28"
        key="AssignProject"
        onClick={() => {
          setMenu("AssignProject");
          navigate("/AssignProject");
        }}
      >
        AssignProject
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
