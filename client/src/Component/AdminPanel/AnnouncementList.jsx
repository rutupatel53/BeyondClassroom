import React from "react";
import "../../App.css";

const AnnouncementList = ({ announcements }) => {
  return (
    <div className="overflow-hidden">
      {/* <h2 className="text-lg font-semibold mb-2">Latest Announcements</h2> */}
      <div className="breaking-news-container">
        {announcements.map((announcement, index) => (
          <div key={index} className="breaking-news">
            {announcement}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
