import React, { useState, useEffect, useRef } from "react";
import { AutoComplete } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import ProjectCard from "../Component/softwareprojectcard/Sprojectcard";
import Navbar from "../Component/Navbar/Navbar";

const Software = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("Fetching projects...");
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token"); // Get JWT token from localStorage
      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Set Authorization header with JWT token
        },
      };

      const response = await axios.get(
        "http://localhost:5000/api/software/",
        config
      );

      if (response && response.data && Array.isArray(response.data.response)) {
        setProjects(response.data.response);
        setFilteredProjects(response.data.response);
      } else {
        console.error("Invalid data received from the server:", response.data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleSearch = (value) => {
    setSearchValue(value);
    if (!value) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  const handleSearchSuggestions = (value) => {
    setSearchValue(value);
    const suggestions = projects
      .map((project) => project.title)
      .filter((title) => title.toLowerCase().includes(value.toLowerCase()));
    setSearchSuggestions(suggestions);
  };

  const handleSelect = (value) => {
    setSearchValue(value);
    handleSearch(value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter") {
      const firstSuggestion = searchSuggestions[0];
      if (firstSuggestion) {
        setSearchValue(firstSuggestion);
        handleSearch(firstSuggestion);
        inputRef.current.blur(); // Remove focus from input
      }
    }
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          Software Projects
        </h1>
        <div className="flex items-center justify-center">
          <AutoComplete
            ref={inputRef}
            value={searchValue}
            style={{
              width: "60%",
            }}
            className="mb-4 "
            options={searchSuggestions.map((value) => ({
              value,
              label: value,
            }))}
            onSelect={handleSelect}
            onSearch={handleSearchSuggestions}
            onChange={handleSearch}
            onKeyDown={handleEnterPress}
            placeholder="Search projects"
            allowClear
            size="large"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
        <div className="ml-4 flex items-center justify-center mt-5">
          <button className="bg-green-500 w-68 md:w-80 h-14 text-white font-semibold py-2 px-6 hover:bg-green-600 rounded-full">
            <Link to={"/addproject"}>Add New Project</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Software;
