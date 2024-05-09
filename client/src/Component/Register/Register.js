import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        values
      );
      if (response && response.status === 201) {
        message.success("Registration successful. Please login.");
        navigate("/login", { replace: true });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Registration error:", error);
      message.error("An error occurred during registration. Please try again.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-gray-50">
      <Navbar />
      <div className="flex flex-col items-center justify-center w-full sm:w-auto ml-0 md:w-auto mb-24 mt-10 mx-auto h-fit">
        <div className="bg-white border-2 border-gray-300 shadow-md rounded p-4 text-center">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
              Create your account
            </h1>
            <Form
              name="registerForm"
              onFinish={handleRegister}
              className="space-y-4 md:space-y-6"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Name is required" }]}
              >
                <Input
                  prefix={<UserOutlined />}
                  placeholder="Name"
                  className="rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Email is required" },
                  { type: "email", message: "Invalid email address" },
                ]}
              >
                <Input
                  prefix={<MailOutlined />}
                  placeholder="Email"
                  className="rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  { required: true, message: "Phone Number is required" },
                ]}
              >
                <Input
                  prefix={<PhoneOutlined />}
                  placeholder="Phone Number"
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
                <Button
                  className="bg-green-500  w-44 h-12 border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 hover:border-transparent rounded-full"
                  type="primary"
                  loading={loading}
                  htmlType="submit"
                >
                  Register
                </Button>
              </Form.Item>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <NavLink
                  to="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Log in
                </NavLink>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
