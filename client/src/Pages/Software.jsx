import React, { useState, useEffect, useRef } from "react";
import { AutoComplete } from "antd";
import ProjectCard from "../Component/softwareprojectcard/Sprojectcard";
import projectsData from "../Component/softwareprojectcard/sprojects.json";

const { Option } = AutoComplete;

const Software = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    setProjects(projectsData);
    setFilteredProjects(projectsData);
  }, []);

  const handleSearch = (value) => {
    setSearchValue(value);
    if (!value) {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter((project) =>
        project.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  const handleSearchSuggestions = (value) => {
    setSearchValue(value);
    const suggestions = projectsData
      .map((project) => project.name)
      .filter((name) => name.toLowerCase().includes(value.toLowerCase()));
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
      <h1 className="text-3xl ml-[600px] font-semibold mb-4">
        Software Projects
      </h1>
      <AutoComplete
        ref={inputRef}
        value={searchValue}
        style={{ width: "40%" }}
        className="ml-[400px]"
        options={searchSuggestions.map((value) => ({
          value,
          label: (
            <option key={value} value={value} style={{ color: "black" }}>
              {value}
            </option>
          ),
        }))}
        onSelect={handleSelect}
        onSearch={handleSearchSuggestions}
        onChange={handleSearch}
        onKeyDown={handleEnterPress}
        placeholder="Search projects"
        allowClear
        size="large"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Software;
