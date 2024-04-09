import React, { useState } from "react";
import { PracticeProblem } from "../Component/PracticeProblem";
import ShowProblem from "../Component/ShowProblem/ShowProblem";
import Navbar from "../Component/Navbar/Navbar";
import LeaderBoard from "../Component/LeaderBoard";
// import { Header } from "../components";

export const Practice = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Practice",
      content: <PracticeProblem />,
    },
    {
      title: "leaderbord",
      content: <LeaderBoard />,
    },
    {
      title: "Solve Problem",
      content: <ShowProblem />,
    },
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <Navbar />
      <div className="tab-bar flex mt-24 ml-5 items-center md:mt-5">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer text-center w-36 ml-5 gap-2 py-2 rounded-md transition duration-300 ${
              activeTab === index
                ? "bg-gradient-to-br text-white from-green-500 to-green-500   shadow-md"
                : "bg-gray text-gray-400 hover:bg-white border border-green-500"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div className="tab-content">{tabs[activeTab].content}</div>
    </div>
  );
};
