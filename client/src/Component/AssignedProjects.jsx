import React, { useState, useEffect } from "react";
import { Card, Tag } from "antd";
import { PhoneOutlined } from "@ant-design/icons";
import challenge from "../Assets/challange.svg";

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
      <div className="bg-[#92C7CF]">
        <div>
          <h1 className="pt-5 text-center text-3xl md:text-5xl font-bold text-[#FD661F] text-custom">
            {/* <h1 className="text-5xl font-bold  pt-5 text-custom text-center text-[#FD661F]"> */}
            Challenges By Faculty
          </h1>
          <p className="text-center text-xs md:text-sm text-custom text-gray-500 mt-5">
            Accept The Challenge In your Favourite Technology And Earn The
            Credits.
          </p>
        </div>
        <div
          style={{
            marginTop: "25px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {/* <img src={challenge} className="flex h-96 w-96"></img> */}
          {projects.map((project) => (
            <Card
              key={project.projectId}
              style={{
                width: 300,
                marginBottom: 20,
                borderRadius: 10,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
              actions={[
                <span>
                  <PhoneOutlined /> Contact {project.assignedBy} for more
                  insights Related To Projects
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
                  <p className="text-[#666] text-center">
                    {project.description}
                  </p>
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
                        <span style={{ color: "#666" }}>
                          {project.deadline}
                        </span>
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
      </div>
    </>
  );
};

export default AssignedProjects;
