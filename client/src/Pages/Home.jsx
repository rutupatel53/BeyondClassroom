import { useState, useEffect } from "react";
import React from "react";
import { getTest } from "../functions/test";
import Footer from "../Component/Footer/footer";
import { Event } from "../Component/Event/Event";
import AnnouncementList from "../Component/AdminPanel/AnnouncementList";
import web from "../Assets/web.png";
import Navbar from "../Component/Navbar/Navbar";
import AssignedProjects from "../Component/AssignedProjects";
import { LandingPage } from "../Component/LandingPage/LandingPage";
import coursesData from "../Component/data";
import curve from "../Assets/headline-curve.svg";
import { List, Typography } from "antd";

const { Title } = Typography;
export const Home = () => {
  const [data, setData] = useState("hii");
  const [announcements, setAnnouncements] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); // State to track selected category

  const categories = [...new Set(coursesData.map((course) => course.category))]; // Extract unique categories

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredCourses =
    selectedCategory === "all"
      ? coursesData
      : coursesData.filter((course) => course.category === selectedCategory);

  useEffect(() => {
    const storedAnnouncements = localStorage.getItem("announcements");
    if (storedAnnouncements) {
      setAnnouncements(JSON.parse(storedAnnouncements));
    }
  }, []);
  useEffect(() => {
    getTest()
      .then((res) => {
        setData(res.message);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      {/* <h1>{data}</h1>Home */}
      <LandingPage />
      <div>
        {/* <div className="relative isolate px-6 pt-14 lg:px-8 pl-60 h-[500px] text-left flex flex-row-reverse items-center bg-pink-50">
          <div className="w-full h-[500px]">
            <img
              src={web}
              alt="BeyondClassroom"
              className="w-fit h-[500px] ml-24 pb-16"
            />
          </div>
          <div className="mx-auto  py-32 sm:py-48 lg:py-56">
            <div className="text-left">
              <h1 className="text-3xl font-bold  text-gray-900 sm:text-6xl">
                Empowering minds to thrive beyond boundaries
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                our project ignites a journey of endless possibilities
                and personal growth
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <div>
            <h1 className="mt-14 text-center text-5xl font-bold text-[#FD661F] text-custom">
              Latest Announcement
            </h1>
          </div>
          <AnnouncementList announcements={announcements} />
        </div>

        {/*{Recommendation} */}
        <div>
          {/* Render clickable category boxes */}

          {/* Render courses based on selected category */}
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-5xl font-bold mb-6 text-center text-[#FD661F]">
                Popular Courses
                <img src={curve} className="h-8  ml-[670px]"></img>
              </h2>
              <div className="flex justify-center space-x-4 mt-8">
                {["all", ...categories].map((category) => (
                  <div
                    key={category}
                    className={`px-4 py-2 cursor-pointer rounded-md ${
                      selectedCategory === category
                        ? "bg-[#0B7077] text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category.toUpperCase()}
                  </div>
                ))}
              </div>

              <div className="grid mt-5  grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-4 ml-2 w-[1500px] h-[428px]">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden relative"
                  >
                    <div className="relative w-full h-[179px]">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-2 right-2 z-10">
                        <span className="bg-[#FD661F] text-white px-2 py-1 rounded-full text-xs font-semibold">
                          +{course.students} students Enrolled
                        </span>
                      </div>
                      <div className="absolute top-2 right-2 bg-gray-800 text-white rounded-full px-2 py-1 text-xs">
                        <span className="font-bold">{course.rating}</span>{" "}
                        {/* Rating */}
                        <span className="ml-1">⭐️</span> {/* Star icon */}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2 text-custom text-[#0B7077]">
                        {course.title}
                      </h3>
                      <p className="text-gray-800 text-custom text-sm mt-5 mb-4">
                        {course.description}
                      </p>
                      <div>
                        <div className="absolute bottom-10 left-2 z-10 text-black">
                          <div className="flex items-center ml-5">
                            <span className="font-semibold text-2xl text-[#FD661F]">
                              ${course.discountPrice}
                            </span>{" "}
                            <span className="font-semibold ml-2">
                              <del>${course.actualPrice}</del>
                            </span>{" "}
                            {/* Discounted Price */}
                          </div>
                        </div>
                        <button
                          href={course.link}
                          className="absolute text-white bg-[#0B7077] px-2 py-1 text-custom bottom-10  right-5 w-42 h-[34px] rounded-[5px]"
                        >
                          Start Learning
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <AssignedProjects />
      </div>

      <Event />
      <Footer />
    </div>
  );
};
