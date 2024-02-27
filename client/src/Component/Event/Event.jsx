import React, { useEffect, useState } from "react";

export const Event = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([
    {
      title: "Project Showcase",
      date: "2024-03-15",
      description: "Explore innovative student projects.",
      link: "#",
    },
    {
      title: "Workshop: Coding Basics",
      date: "2024-04-10",
      description: "Learn the fundamentals of coding.",
      link: "#",
    },
    {
      title: "Career Panel: Tech Industry",
      date: "2024-05-05",
      description: "Gain insights from industry professionals.",
      link: "#",
    },
  ]);

  useEffect(() => {
    renderUpcomingEvents();
  }, []);

  const renderUpcomingEvents = () => {
    return upcomingEvents.map((event, index) => (
      <div key={index} className="p-4 bg-gray-100 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-3">
          {event.date} - {event.description}
        </p>
        <a href={event.link} className="text-blue-500 font-semibold">
          Learn More
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
