import React, { useState, useEffect } from "react";
import { Menu, Avatar, message } from "antd";
import { UserOutlined, LogoutOutlined, LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RightMenu = ({ mode }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
      fetchUsername(token);
    }
  }, []);

  const fetchUsername = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/user/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsername(response.data.username);
    } catch (error) {
      console.error("Failed to fetch username:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      await axios.post("http://localhost:5000/faculty/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      setLoggedIn(false);
      setUsername("");
      navigate("/AdminLogin");
      message.success("Logged out successfully");
    } catch (error) {
      console.error("Failed to logout:", error);
      message.error("Failed to logout");
    }
  };

  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            {loggedIn && username ? (
              <span className="username">{username}</span>
            ) : (
              <span className="username">Guest</span>
            )}
          </>
        }
      >
        {loggedIn ? (
          <Menu.Item key="logout" onClick={handleLogout}>
            <LogoutOutlined /> Logout
          </Menu.Item>
        ) : (
          <>
            <Menu.Item
              key="login"
              onClick={() => {
                navigate("/login");
              }}
            >
              <LoginOutlined /> Login
            </Menu.Item>
            <Menu.Item
              key="AdminLogin"
              onClick={() => {
                navigate("/AdminLogin");
              }}
            >
              <LoginOutlined /> Admin login
            </Menu.Item>
          </>
        )}
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
