"use client";
import { use, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ProjectDetails({ params }) {
  const { id } = use(params);
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id.toString() === id);
        setProject(found);
      });
  }, [id]);

  if (!blog) {
    return <div className="p-8">Blog not found.</div>;
  }

  return (
    <div className="p-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow">
      <img src={project.image} alt={project.title} className="rounded mb-6 h-60 w-full object-cover" />
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
      <div className="text-gray-500 dark:text-gray-400 mb-4">
        By {project.author} • {project.date}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map(tag => (
          <span key={tag} className="bg-yellow-200 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </div>
    </div>
  );
}
