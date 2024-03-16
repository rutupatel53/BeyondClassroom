import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { message, Steps, Select, Input, Button } from "antd";
import { SmileOutlined } from "@ant-design/icons";
// import { toast } from "react-toastify";

const { Option } = Select;

export default function RecommendationForm() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    username: "",
    academicInterests: [],
    preferredLearningStyle: "",
    gradeLevel: "",
    subjectsOfInterest: [],
    extracurricularActivities: "",
    preferredFormat: "",
    preferredLanguage: "",
    previousCourses: "",
    goals: "",
    feedback: "",
  });

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_VERCEL_ENV_BASEURL}/api/submitRecommendation`,
        userData
      )
      .then((response) => {
        console.log("Recommendation submitted successfully!");
        message.success("Recommendation submitted successfully!");
        setLoading(false);
        // Optionally, you can navigate to a confirmation page
        navigate("/confirmation");
      })
      .catch((error) => {
        message.error("Failed to submit recommendation.");
        setLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-black text-decoration-line: underline text-center">
        Recommendation Form
      </h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="username"
            >
              Username:
            </label>
            <Input
              id="username"
              value={userData.username}
              onChange={(e) => handleChange("username", e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="academicInterests"
            >
              Academic Interests:
            </label>
            <Select
              id="academicInterests"
              mode="tags"
              style={{ width: "100%" }}
              value={userData.academicInterests}
              onChange={(value) => handleChange("academicInterests", value)}
            >
              {/* Add options dynamically */}
            </Select>
          </div>
          {/* Add other form fields similarly */}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="preferredLearningStyle"
            >
              Preferred Learning Style:
            </label>
            <Select
              id="preferredLearningStyle"
              style={{ width: "100%" }}
              value={userData.preferredLearningStyle}
              onChange={(value) =>
                handleChange("preferredLearningStyle", value)
              }
            >
              <Option value="visual">Visual</Option>
              <Option value="auditory">Auditory</Option>
              <Option value="kinesthetic">Kinesthetic</Option>
            </Select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="gradeLevel"
            >
              Grade Level or Academic Year:
            </label>
            <Input
              id="gradeLevel"
              value={userData.gradeLevel}
              onChange={(e) => handleChange("gradeLevel", e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-lg font-semibold mb-2"
            htmlFor="subjectsOfInterest"
          >
            Subjects of Interest:
          </label>
          <Select
            id="subjectsOfInterest"
            mode="tags"
            style={{ width: "100%" }}
            value={userData.subjectsOfInterest}
            onChange={(value) => handleChange("subjectsOfInterest", value)}
          >
            {/* Add options dynamically */}
          </Select>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-lg font-semibold mb-2"
            htmlFor="extracurricularActivities"
          >
            Extracurricular Activities:
          </label>
          <Input
            id="extracurricularActivities"
            value={userData.extracurricularActivities}
            onChange={(e) =>
              handleChange("extracurricularActivities", e.target.value)
            }
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="preferredFormat"
            >
              Preferred Format for Learning Materials:
            </label>
            <Select
              id="preferredFormat"
              style={{ width: "100%" }}
              value={userData.preferredFormat}
              onChange={(value) => handleChange("preferredFormat", value)}
            >
              {/* Add options dynamically */}
            </Select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="preferredLanguage"
            >
              Preferred Language:
            </label>
            <Input
              id="preferredLanguage"
              value={userData.preferredLanguage}
              onChange={(e) =>
                handleChange("preferredLanguage", e.target.value)
              }
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-lg font-semibold mb-2"
            htmlFor="previousCourses"
          >
            Previous Courses or Topics Studied:
          </label>
          <Input
            id="previousCourses"
            value={userData.previousCourses}
            onChange={(e) => handleChange("previousCourses", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-lg font-semibold mb-2"
            htmlFor="goals"
          >
            Goals or Career Aspirations:
          </label>
          <Input
            id="goals"
            value={userData.goals}
            onChange={(e) => handleChange("goals", e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-600 text-lg font-semibold mb-2"
            htmlFor="feedback"
          >
            Feedback or Comments:
          </label>
          <Input.TextArea
            id="feedback"
            rows={4}
            value={userData.feedback}
            onChange={(e) => handleChange("feedback", e.target.value)}
          />
        </div>

        <div className="mt-6">
          <button
            className="bg-green-700 w-52 h-16  border-gray-400 text-white ml-[600px] font-semibold py-2 px-6 ml-4 rounded-[25PX] transform transition duration-300 hover:-translate-y-1 hover:shadow-md"
            onClick={handleSubmit}
            loading={loading}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
