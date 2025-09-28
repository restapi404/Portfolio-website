"use client";
import { useEffect, useState } from "react";
import ProjectCard from "../project/card";
import SearchBar from "../../components/SearchBar";

export default function Projects() {
  const [project, setProject] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    fetch("/data/projectCards.json")
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setFiltered(data);
      });
  }, []);

  const handleSearch = (query) => {
    const q = query.toLowerCase();
    setFiltered(
      projects.filter(
        (project) =>
          project.title.toLowerCase().includes(q) ||
          project.summary.toLowerCase().includes(q) ||
          project.tags.some((tag) => tag.toLowerCase().includes(q))
      )
    );
  };

  return (
    <div className="p-8">
      <h2 className="text-[#750000] text-3xl font-bold mb-6 dark:text-[#4C4CA8]">All Projects</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}