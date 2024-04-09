import React, { useState } from "react";
import { Input, Select, Button } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import AdminNavbar from "../AdminNavbar/AdminNavbar";

const { Option } = Select;

export const AddEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    time: "",
    description: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:5000/add/events", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Event added successfully");
      } else {
        console.error("Failed to add event");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center rounded-md mx-auto mt-10 p-8 bg-white shadow-md w-96">
          <h1 className="text-2xl text-[#007F73] mb-6">Add Event</h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Title:
              </label>
              <Input
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Enter event title"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Time:
              </label>
              <Input
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                placeholder="Enter event time"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Description:
              </label>
              <Input.TextArea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Enter event description"
              />
            </div>
            <Button
              type="primary"
              className="items-center justify-center bg-[#007F73] w-52 h-11
          border-gray-400 text-white font-semibold py-2 px-6 ml-4
          hover:border-transparent border-none rounded-none"
              htmlType="submit"
            >
              Submit
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};
