import React, { useState, useEffect } from "react";
import { Card, Tag } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

const { Meta } = Card;

const AssignedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("/project/get", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const assignedData = await response.json();
        setProjects(assignedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-3xl flex items-center justify-center mt-7 text-green-500">
          Challenges By Faculty
        </h1>
      </div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {projects.map((project) => (
          <Card
            key={project.projectId}
            style={{
              width: 400,
              marginBottom: 20,
              borderRadius: 10,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
            actions={[
              <span>
                <PhoneOutlined /> Contact {project.assignedBy} for more insights
                Related To Projects
              </span>,
            ]}
          >
            <Meta
              title={
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  <p className="text-center mt-5">{project.projectType}</p>
                </span>
              }
              description={
                <p className="text-[#666] text-center">{project.description}</p>
              }
            />
            <div className="text-center mt-5">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>
                      <strong style={{ color: "#444" }}>Lead By:</strong>
                    </td>
                    <td>
                      <span style={{ color: "#666" }}>
                        {project.assignedBy}
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong style={{ color: "#444" }}>Deadline:</strong>
                    </td>
                    <td>
                      <span style={{ color: "#666" }}>{project.deadline}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong style={{ color: "#444" }}>Tech Stack:</strong>
                    </td>
                    <td>
                      {project.techStack.map((tech) => (
                        <Tag key={tech} color="geekblue">
                          {tech}
                        </Tag>
                      ))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AssignedProjects;
