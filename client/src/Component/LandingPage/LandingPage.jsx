import React from "react";
import curve from "../../Assets/headline-curve.svg";
import home_right from "../../Assets/home_img.png";

export const LandingPage = () => {
  return (
    <>
      <div className="bg-[#D2E6E4] pr-5 h-[712px] md:h-[650px] rounded-b-[50px]">
        <div className="md:flex">
          <button className="bg-white rounded-2xl w-48 h-12 mt-[80px] ml-8 md:w-48 md:ml-[101px] md:h-12">
            Never Stop learning
          </button>
        </div>
        <div className="flex float-left">
          <div className="w-[320px] md:w-[700px] ">
            <h1 className=" font-semibold ml-8 mt-8  md:ml-[101px]">
              <span className="text-black font-custom text-3xl md:text-6xl">
                Learn
              </span>
              <span className="font-custom ml-2 text-3xl text-[#0B7077] md:text-7xl">
                a New Skill
                <img
                  src={curve}
                  className="h-4 ml-28 md:h-5 md:ml-[350px]"
                ></img>
              </span>
            </h1>
            <h1 className="text-3xl ml-8  md:text-6xl text-black mt-5 font-custom font-semibold md:ml-[101px]">
              Everyday, Anytime,
            </h1>
            <h1 className="ml-8 text-3xl md:text-6xl text-black mt-7 font-semibold font-custom md:ml-[101px]">
              And Anywhere
            </h1>
            <p className="text-gray-500 text-xs ml-8 md:text-xl md:ml-[101px] mt-5">
              Explore endless learning opportunities on our website.
              <br /> Discover courses, projects, events, and faculty info all
              <br /> in one place. Start your journey today!
            </p>

            <div className="mt-6 ml-8 md:ml-[152px] md:flex">
              <button className="bg-[#0B7077] w-56 h-16 border-gray-400 text-white font-semibold py-2   rounded-[25PX] transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
                Explore Us
              </button>
            </div>
          </div>
        </div>
        <img
          src={home_right}
          alt="Hero img"
          className="w-[300px] mt-96 md:object-cover md:w-[600px] md:h-[520px] md:mt-0 md:ml-[500px]"
        />
      </div>
    </>
  );
};
