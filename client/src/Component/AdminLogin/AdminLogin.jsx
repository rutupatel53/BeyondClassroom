import React, { useState, useEffect } from "react";
import { Form, Input, Button, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = ({ setUserState }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState({});
  const [error, setError] = useState(null);
  const [user, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (changedValues) => {
    setUserDetails({
      ...user,
      ...changedValues,
    });
  };

  const onFinish = async () => {
    // Handle the form submission logic here if needed
  };

  const validateForm = (values) => {
    const error = {};

    if (!values.username) {
      error.username = "Username is required";
    }

    if (!values.password) {
      error.password = "Password is required";
    }

    return error;
  };

  const loginHandler = async () => {
    try {
      const errors = validateForm(user);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
        setLoading(true);
        const response = await axios.post(`fac/login`, user, {
          withCredentials: true,
        });
        navigate("/");
        setLoading(false);

        localStorage.setItem("token", response?.data?.token);
        setUserState(response?.data?.User);
      }
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError("An error occurred during login. Please try again.");
      }
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      username: "",
      password: "",
    });
  }, [formErrors]);

  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center w-full sm:w-auto ml-0 md:w-auto mb-24 mt-10 mx-auto h-fit ">
          <div className="bg-white border-2 border-gray-300 shadow-md rounded p-4 text-center">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Spin spinning={loading} tip="Logging You In.... Please Wait." />
              <Form
                form={form}
                name="loginForm"
                onFinish={onFinish}
                onValuesChange={changeHandler}
              >
                <h1 className="text-xl font-bold mb-4 leading-tight tracking-tight text-black md:text-2xl">
                  Login As Admin
                </h1>
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
                <Button type="primary" htmlType="submit" onClick={loginHandler}>
                  Login
                </Button>
                {error && <p className="text-red-500">{error}</p>}
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/AdminRegister"
                    className="font-medium text-primary-600 hover:underline"
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

export default AdminLogin;
