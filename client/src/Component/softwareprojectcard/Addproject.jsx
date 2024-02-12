import React, { useState } from "react";
import { Input, Button, Form } from "antd";

const { TextArea } = Input;

const AddProjectForm = ({ onAddProject }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields().then((values) => {
      form.resetFields();
      const newProject = {
        id: Date.now(),
        name: values.name,
        description: values.description,
        image: "https://via.placeholder.com/150",
      };
      onAddProject(newProject);
    });
  };

  return (
    <div>
      <h1>Add New Project</h1>
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
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Project
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProjectForm;
