import React, { useState } from "react";
import { Typography, Button } from "antd";
import curve from "../Assets/headline-curve.svg";
import course_right from "../Assets/course_right.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons"; // Import the LeftOutlined and RightOutlined icons
import AngularCard from "../Component/CourseCardItem/CourseCarditem";
import cardData from "../Component/CourseCardItem/CardData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import courses2 from "../Component/CourseCardItem/Courses2.json";
import { StarFilled } from "@ant-design/icons";
import Navbar from "../Component/Navbar/Navbar";

export const Courses = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Display 3 slides at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Adjust number of slides to show for smaller screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust number of slides to show for mobile devices
        },
      },
    ],
  };
  return (
    <>
      {" "}
      <Navbar />
      <div id="hero" className="bg-white relative md:py-16 overflow-x-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-[320px] md:w-2/3 md:pr-8">
              <div className="text-left font-custom ">
                <h1 className="text-2xl ml-5 mt-10 md:text-7xl font-bold md:ml-60 mb-6">
                  <span className="text-green-700 font-custom">Improve</span>
                  <span className=" font-custom ml-5">your Skill</span>
                  <img src={curve} className="h-4  md:h-6 md:ml-0 "></img>
                </h1>
                <h1 className="text-2xl ml-5 md:text-6xl font-bold md:ml-60 mb-6">
                  With Different Way
                </h1>
                <p className="text-gray-500 text-sm ml-5 md:text-xl md:ml-64 mt-4">
                  Let's take an online course to improve your skills in a
                  different way, <br />
                  you can set your own study time according to your learning
                  speed. <br />
                  So you san study comfortable and absorb tge material easily.
                </p>
                <div className="mt-6 ml-8 md:ml-60 md:flex">
                  <button className="bg-green-700 w-52 h-16 mr-6 border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 rounded-[25PX] transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    Get Started
                  </button>
                  <button className="bg-green-700 mr-6 mt-10 md:mt-0 w-52 h-16  border-gray-400 text-white ml-32 font-semibold py-2 px-6 ml-4 rounded-[25PX] transform transition duration-300 hover:-translate-y-1 hover:shadow-md">
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mr-52 md:mt-0">
              <img
                src={course_right}
                alt="Hero img"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/*Courses*/}
          <div id="courses">
            <div className=" bg-gray-200">
              <h1 className="text-green-700 text-6xl text-center font-custom pt-2 ">
                Courses
              </h1>
              <p className="text-center text-gray-500 md:text-xl mt-9">
                This Are The Courses Which Are Suggested From Faculty And The
                Seniors!
              </p>
              <div className="mt-16">
                <Slider {...settings}>
                  {courses2.map((course) => (
                    <div key={course.id} className="px-4 py-2">
                      <div className="bg-white border border-gray-300 rounded-lg shadow-lg">
                        <img
                          src={course.imageUrl}
                          alt={course.title}
                          className="w-full h-64 object-cover rounded-t-lg"
                        />
                        <div className="p-4">
                          <h3 className="text-xl font-semibold mb-2">
                            {course.title}
                          </h3>
                          <p className="text-gray-700 mb-2">
                            {course.description}
                          </p>
                          <div className="flex items-center mb-2 size-12">
                            <span className="text-yellow-500 mr-1">
                              &#9733;
                            </span>{" "}
                            {/* Use a star emoji */}
                            <span className="font-semibold">
                              {course.rating}
                            </span>
                          </div>
                          <a
                            href={course.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <h1 className="text-green-700 text-3xl font-custom md:text-6xl text-center mt-9">
            Steps To Learn Fastly
          </h1>
          <p className="text-center text-xs md:text-xl text-gray-500 mt-9">
            This Are The Courses With Steps Which You can Follow
          </p>
          <div className="flex flex-wrap justify-center mt-8 gap-1">
            {" "}
            {cardData &&
              cardData.map((card, index) => (
                <AngularCard
                  key={index}
                  title={card.title}
                  subtitle={card.subtitle}
                  episodes={card.episodes}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
