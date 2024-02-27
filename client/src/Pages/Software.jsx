import React, { useState, useEffect, useRef } from "react";
import { AutoComplete } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import ProjectCard from "../Component/softwareprojectcard/Sprojectcard";

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
      const response = await axios.get("api/test/");
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
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4">Software Projects</h1>
      <AutoComplete
        ref={inputRef}
        value={searchValue}
        style={{ width: "40%" }}
        className="mb-4"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
      <div className="ml-4">
        <button className="bg-green-500 w-80 h-16 text-white font-semibold py-2 px-6 hover:bg-green-600 rounded-full">
          <Link to={"/addproject"}>Add New Project</Link>
        </button>
      </div>
    </div>
  );
};

export default Software;
