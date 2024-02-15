import { useState, useEffect } from "react";
import React from "react";
import { getTest } from "../functions/test";
import Footer from "../Component/Footer/footer";
import { Event } from "../Component/Event/Event";
import AnnouncementList from "../Component/AdminPanel/AnnouncementList";
import web from "../Assets/web.png";
export const Home = () => {
  const [data, setData] = useState("hii");
  const [announcements, setAnnouncements] = useState([]);

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
      {/* <h1>{data}</h1>Home */}
      <div>
        <div className="relative isolate px-6 pt-14 lg:px-8 pl-60 h-[500px] text-left flex flex-row-reverse items-center bg-pink-50">
          <div className="w-full h-[500px]">
            <img
              src={web}
              alt="BeyondClassroom"
              className="w-fit h-[500px] ml-80 pb-16"
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
        </div>

        <div>
          <strong>Latest Announcement:</strong>{" "}
          <AnnouncementList announcements={announcements} />
        </div>

        {/*{Recommendation} */}
        <div>
          <section className="py-12 bg-gray-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Recommended Projects
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="project1.jpg"
                    alt="AI/ML project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">AI/ML project</h3>
                    <p className="text-gray-600 mb-4">
                      The project aims to train data model & find accuracy as
                      per project's data.
                    </p>
                    <a href="#" className="text-blue-500 font-semibold">
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="project2.jpg"
                    alt="INTERNSHIP project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      Internship project
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The project aims to gain knowledge and exp.
                    </p>
                    <a href="#" className="text-blue-500 font-semibold">
                      Learn More
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src="project2.jpg"
                    alt="INTERNSHIP project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">
                      Internship project
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The project aims to gain knowledge and exp.
                    </p>
                    <a href="#" className="text-blue-500 font-semibold">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div>
        <Event />
      </div>
    </div>
  );
};
