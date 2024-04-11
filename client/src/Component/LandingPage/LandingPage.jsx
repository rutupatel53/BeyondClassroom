import React from "react";
import curve from "../../Assets/headline-curve.svg";
import home_right from "../../Assets/home_img.png";

export const LandingPage = () => {
  return (
    <>
      <div className="bg-[#D2E6E4] h-[650px] rounded-b-[50px]">
        <div className="flex">
          <button className="bg-white rounded-2xl w-48 h-12 mt-[80px] ml-[101px]">
            Never Stop learning
          </button>
        </div>
        <div className="flex float-left">
          <div className="w-[700px] ">
            <h1 className="text-7xl font-semibold ml-[101px] mt-5 mb-6">
              <span className="text-black font-custom">Learn</span>
              <span className="font-custom ml-5 text-[#0B7077]">
                a New Skill
                <img src={curve} className="h-5  ml-[350px]"></img>
              </span>
            </h1>
            <h1 className="text-6xl text-black mt-5 font-custom font-semibold ml-[101px]">
              Everyday, Anytime,
            </h1>
            <h1 className="text-6xl text-black mt-7 font-semibold font-custom ml-[101px]">
              And Anywhere
            </h1>
            <p className="text-gray-500 text-xl ml-[101px] mt-5">
              Explore endless learning opportunities on our website.
              <br /> Discover courses, projects, events, and faculty info all
              <br /> in one place. Start your journey today!
            </p>
            
            <div className="mt-6 ml-[152px]">
              <button className="bg-[#0B7077] w-56 h-16 border-gray-400 text-white font-semibold py-2   rounded-[25PX] transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
                Explore Us
              </button>
            </div>
          </div>
        </div>
        <img
          src={home_right}
          alt="Hero img"
          className="w-[800px] h-[520px] ml-24  object-cover "
        />
      </div>
    </>
  );
};
