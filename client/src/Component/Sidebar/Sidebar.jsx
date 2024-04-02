import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { MdMenu } from "react-icons/md"; // Import hamburger menu icon
import {
  HomeOutlined,
  CalendarOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleMenuClick = (menuItem) => {
    navigate(`/${menuItem.toLowerCase()}`);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256, height: "100vh" }}>
      <div style={{ padding: "10px" }}>
        <MdMenu onClick={toggleCollapsed} style={{ fontSize: "24px" }} />
      </div>
      <Menu
        defaultSelectedKeys={["AdminPanel"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        style={{ height: "calc(100% - 50px)" }} // Adjust height as needed
      >
        <Menu.Item
          key="AdminPanel"
          icon={<HomeOutlined />}
          onClick={() => handleMenuClick("AdminPanel")}
        >
          AdminPanel
        </Menu.Item>
        <Menu.Item
          key="AddProblem"
          icon={<CalendarOutlined />}
          onClick={() => handleMenuClick("AddProblem")}
        >
          AddProblem
        </Menu.Item>
        <SubMenu key="sub1" icon={<TrophyOutlined />} title="Goals">
          <Menu.Item key="goal1" onClick={() => handleMenuClick("Goal1")}>
            Goal 1
          </Menu.Item>
          <Menu.Item key="goal2" onClick={() => handleMenuClick("Goal2")}>
            Goal 2
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default Sidebar;
