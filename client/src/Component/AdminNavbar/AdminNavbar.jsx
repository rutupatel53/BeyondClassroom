import React, { useState, useEffect } from "react";
import logo from "../../Assets/BeyondClassroom.jpg";
import "./Navbar.css";
import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AdminNavbar = () => {
  const [menu, setMenu] = useState("Home");
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <div className="navbar-menu">
              <Button className="menuButton" type="text" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className="rightMenu">
                <RightMenu mode={"horizontal"} />
              </div>
              <div className="leftMenu ml-[600px]">
                <LeftMenu mode={"horizontal"} />
              </div>
              <a href="/adminpanel">
                {/* <img
                  src={logo}
                  alt="logo"
                  className="w-16 h-10 md:w-24 lg:w-32 xl:w-40"
                /> */}
                <h3 className="text-xl ml-32 sm:text-5xl md:text-xl lg:text-2xl xl:text-3xl font-semibold text-center mt-2">
                  <span className="text-green-500 font-custom">Beyond</span>
                  <span className="font-custom">Classroom</span>
                </h3>
              </a>
            </div>

            <Drawer
              title={"Menu"}
              placement="right"
              width={window.innerWidth > 900 ? 800 : window.innerWidth - 150}
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};
export default AdminNavbar;
