import React, { useEffect, useState } from "react";

export const Event = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("/add/events", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const eventData = await response.json();
      setUpcomingEvents(eventData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const renderUpcomingEvents = () => {
    return upcomingEvents.map((event, index) => (
      <div
        key={index}
        className="p-4  mr-4 md:mr-0 gap-2 bg-gray-100 rounded-md shadow-md"
      >
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-3">
          {new Date(event.time).toLocaleDateString()} - {event.description}
        </p>
        {/* Assuming there's a link property in your API response */}
        <a href={event.link} className="text-blue-500 font-semibold">
          See More
        </a>
      </div>
    ));
  };

  return (
    <>
      <div className="bg-[#92C7CF] pt-15">
        <section className="py-12 ">
          <div className="container mx-auto">
            <h1 className="pt-5 text-center text-3xl md:text-5xl font-bold text-[#FD661F] text-custom">
              Upcoming Events
            </h1>
            <p className="text-center text-xs md:text-sm text-custom text-gray-500 mt-5">
              This Are The Events Which Will be Held In Our College In Upcoming
              Day's
            </p>
            <div className="grid grid-cols-1 mt-5 ml-5 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderUpcomingEvents()}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
