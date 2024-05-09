import React, { useState } from "react";
import { Input, button, message } from "antd";
import AdminNavbar from "../AdminNavbar/AdminNavbar";
// import Sidebar from "../Sidebar/Sidebar";

const AdminPanel = () => {
  const [announcement, setAnnouncement] = useState("");
  const [announcementsList, setAnnouncementsList] = useState([]);

  const handleAnnouncementChange = (e) => {
    setAnnouncement(e.target.value);
  };

  const handleAnnouncementSubmit = () => {
    const newAnnouncementList = [...announcementsList, announcement];
    localStorage.setItem("announcements", JSON.stringify(newAnnouncementList));
    setAnnouncementsList(newAnnouncementList);
    setAnnouncement(""); // Clear the input field
    message.success("Announcement submitted successfully");
  };

  return (
    <div>
      <AdminNavbar />
      <div className="w-full max-w-md mx-auto h-fit  mt-24 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Admin Panel</h2>
        <Input.TextArea
          value={announcement}
          onChange={handleAnnouncementChange}
          placeholder="Enter announcement..."
          autoSize={{ minRows: 3, maxRows: 6 }}
          className="mb-4"
        />

        <button
          className="bg-green-500 w-86 h-14 ml-24 md:w-80 h-16 border-gray-400 text-white ml-32
      font-semibold py-2 px-6 ml-4 hover:border-transparent rounded-full"
          onClick={handleAnnouncementSubmit}
        >
          Submit Announcement
        </button>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">
            Submitted Announcements:
          </h3>
          <ul>
            {announcementsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
