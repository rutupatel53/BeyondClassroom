import React, { useState } from "react";
import { Card } from "antd";

const AngularCard = ({ title, subtitle, episodes }) => {
  const [isActive, setIsActive] = useState(false);

  const handleCardClick = () => {
    setIsActive(!isActive);
  };

  return (
    <Card
      className={`w-350 h-220 bg-white rounded-lg shadow-lg overflow-hidden relative transition duration-400 ease-in-out ${
        isActive ? "active" : ""
      }`}
      hoverable
      onClick={handleCardClick}
      style={{ width: isActive ? 500 : 350, height: isActive ? 600 : 220 }}
    >
      <div
        className={`w-full h-150 bg-gray-700 bg-center bg-no-repeat bg-cover relative transition-opacity duration-1500 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      ></div>
      <div
        className={`w-90 text-center mx-auto mt-12 transition-opacity duration-1500 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-22px text-gray-700 font-medium">{title}</div>
        <div className="text-12px text-gray-500">{subtitle}</div>
      </div>

      <div
        className={`absolute top-0 right-0 w-full h-full bg-gray-900 opacity-0 transition-opacity duration-1500 ${
          isActive ? "opacity-100" : ""
        }`}
      >
        <div className="text-white text-center mt-20 text-24px">{title}</div>
        <div className="text-center text-gray-500 w-80 mx-auto border-b border-white pb-4">
          {subtitle}
        </div>
        {episodes.map((episode, index) => (
          <div
            className={`text-white overflow-hidden cursor-pointer ${
              index % 2 === 0 ? "bg-gray-600" : "bg-gray-700"
            } hover:bg-gray-800 transition duration-300`}
            key={index}
          >
            <div className="m-4">{`${index + 1}. ${episode}`}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default AngularCard;
