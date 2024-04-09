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
        className="p-4 ml-1 gap-2 bg-gray-100 rounded-md shadow-md"
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
    <section className="py-12 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {renderUpcomingEvents()}
        </div>
      </div>
    </section>
  );
};
