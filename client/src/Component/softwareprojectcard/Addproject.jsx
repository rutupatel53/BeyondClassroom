import React from "react";
import { Input, Button, Form, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import axios from "axios";

const { TextArea } = Input;

const AddProjectForm = ({ onAddProject }) => {
  const [form] = Form.useForm();

  const handleSubmit = async () => {
    try {
      const values = await form.validateFields();
      form.resetFields();
      const newProject = {
        id: Date.now(),
        name: values.name,
        description: values.description,
        image: values.image[0].thumbUrl,
        link: values.link,
      };
      // Send data to server using Axios POST request
      await axios.post("your_api_endpoint", newProject);
      onAddProject(newProject);
      message.success("Project added successfully!");
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
        message.error("You can only upload JPG/PNG file!");
      }
      return isJpgOrPng;
    },
    onChange: (info) => {
      const { status, name } = info.file;
      if (status === "done") {
        message.success(`${name} file uploaded successfully`);
      } else if (status === "error") {
        message.error(`${name} file upload failed.`);
      }
    },
  };
  


  return (
    <div className="max-w-md mx-auto p-6 bg-white  rounded-md shadow-md mt-6">
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
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name="link"
          label="Project Link"
          rules={[{ required: true, message: "Please enter project link" }]}
        >
          <Input placeholder="Project Link" />
        </Form.Item>
        <Form.Item>
          <button
            htmlType="submit"
            className="bg-blue-400 border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 hover:border-transparent rounded-full"
          >
            Add Project
          </button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProjectForm;
