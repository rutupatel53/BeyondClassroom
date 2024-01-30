import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import basestyle from "./Base.module.css";
import registerstyle from "./Register.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import login1 from "../Register/login.css";
const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full  sm:w-auto ml-0  md:w-auto mb-24 mt-10 mx-auto h-fit ">
          <div className="bg-white border-2 border-gray-300 shadow-md rounded p-4 text-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Form name="registerForm" className="space-y-4 md:space-y-6">
                <h1 className="font-bold mt-10 mb-14 text-2xl md:text-3xl lg:text-4xl">
                  Create your account
                </h1>

                <Form.Item
                  rules={[{ required: true, message: "Username is required" }]}
                >
                  <Input
                    className="rutu"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input
                    className="rutu"
                    type="password"
                    name="password"
                    id="password"
                    prefix={<LockOutlined />}
                    placeholder="••••••••"
                  />
                </Form.Item>
                <Form.Item>
                  <Button className={basestyle.button_common}>Register</Button>
                </Form.Item>
              </Form>
              <NavLink to="/login">Already registered? Login</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
