import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate, NavLink } from "react-router-dom";
import vmc from "../../Assets/BeyondClassroom.jpg";
import basestyle from "../Register/Base.module.css";
import loginstyle from "../Login/Login.module.css";
import { Spin } from "antd";
const Login = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center w-full  sm:w-auto ml-0  md:w-auto mb-24 mt-10 mx-auto h-fit ">
          <div className="bg-white border-2 border-gray-300 shadow-md rounded p-4 text-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                Sign in to your account
              </h1>

              <Form name="loginForm" className="space-y-4 md:space-y-6">
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: "Username is required" }]}
                >
                  <Input
                    prefix={<UserOutlined />}
                    placeholder="Username"
                    className="rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="••••••••"
                    className="rounded-lg"
                  />
                </Form.Item>
                <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </Form.Item>
                <Form.Item>
                  <Button className={basestyle.button_common} htmlType="submit">
                    Sign in
                  </Button>
                </Form.Item>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;