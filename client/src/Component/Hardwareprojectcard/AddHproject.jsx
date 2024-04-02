import React, { useState } from "react";
import { Input, Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

const { TextArea } = Input;

const AddHProjectForm = ({ onAddProject }) => {
  const [form] = Form.useForm();
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
      const formData = new FormData();
      formData.append("title", values.name);
      formData.append("description", values.description);
      formData.append("link", values.link);
      formData.append("image", values.image[0].originFileObj);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Set Authorization header with JWT token
        },
      };

      const response = await axios.post(
        "http://localhost:5000/api/hardware/store",
        formData,
        config
      );

      if (response && response.status === 200) {
        message.success("Project added successfully!");
        form.resetFields();
        if (typeof onAddProject === "function") {
          onAddProject(); // Notify parent component about the new project added
        }
      } else {
        throw new Error("Failed to add project");
      }
    } catch (error) {
      console.error("Error adding project:", error);
      message.error("Failed to add project. Please try again later.");
    }
  };

  const uploadProps = {
    beforeUpload: (file) => {
      const isJpgOrPng =
        file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG files!");
      }
      return isJpgOrPng;
    },
    onChange: (info) => {
      if (info.file.status === "uploading") {
        setUploading(true);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} uploaded successfully`);
        setUploading(false);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} upload failed.`);
        setUploading(false);
      }
    },
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-6">
        <h1 className="text-xl font-semibold mb-4">Add New Project</h1>
        <Form form={form} onFinish={handleSubmit} layout="vertical">
          <Form.Item
            name="name"
            label="Project Name"
            rules={[{ required: true, message: "Please enter project name" }]}
          >
            <Input placeholder="Project Name" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter description" }]}
          >
            <TextArea rows={4} placeholder="Description" />
          </Form.Item>
          <Form.Item
            name="image"
            label="Upload Image"
            rules={[{ required: true, message: "Please upload an image" }]}
            valuePropName="fileList"
            getValueFromEvent={(e) => e.fileList}
          >
            <Upload {...uploadProps} listType="picture">
              <Button icon={<UploadOutlined />} loading={uploading}>
                Click to upload
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item name="link" label="Project Link">
            <Input placeholder="Project Link" />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              className="bg-blue-400 border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 hover:border-transparent rounded-full"
              loading={uploading}
            >
              Add Project
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddHProjectForm;
