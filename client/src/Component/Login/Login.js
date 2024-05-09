import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const navigate = useNavigate();

  // State variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to handle form submission
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        username,
        password,
      });
      if (response && response.data && response.data.token) {
        console.log("Login successful");
        // Store the token in local storage
        localStorage.setItem("token", response.data.token);
        navigate("/", { replace: true });
      } else {
        throw new Error("Invalid response from server");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
    setLoading(false);
  };

  return (
    <>
      <section className="bg-gray-50">
        <Navbar />
        <div className="flex flex-col items-center justify-center w-full sm:w-auto ml-0 md:w-auto mb-24 mt-10 mx-auto h-fit">
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // Update username state
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update password state
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
                  <Button
                    className="bg-green-500 w-44 h-12 border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 hover:border-transparent rounded-full"
                    type="primary"
                    loading={loading}
                    onClick={handleLogin} // Call handleLogin on button click
                  >
                    Log in
                  </Button>
                </Form.Item>
                {error && <p className="text-red-500">{error}</p>}{" "}
                {/* Display error message if present */}
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
