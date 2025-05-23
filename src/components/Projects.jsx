import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Multi-Tenant SaaS Platform",
        description: "Modular business suite with tenant isolation, CRM, inventory, and RBAC-driven access control.",
        languages: ["Java"],
        techUsed: ["Spring Boot", "MySQL", "REST APIs", "JWT", "Maven"],
        duration: "Feb 2024 – May 2024",
        link: "business-management",
    },
    {
        title: "University Management System",
        description: "End-to-end admission and document workflow automation for higher-ed institutions.",
        languages: ["Java", "HTML", "CSS", "JavaScript"],
        techUsed: ["Servlets/JSP", "JDBC", "MySQL", "Twilio API"],
        duration: "Jul 2023 – Oct 2023",
        link: "university-management-system",
    },
    {
      title: "Learning Management System",
      description: "SaaS platform for managing student onboarding, course delivery, and assessments with full admin control.",
      languages: ["JavaScript", "Java"],
      techUsed: ["Spring Boot", "React", "MySQL", "Tailwind CSS"],
      duration: "Jan 2024 – Apr 2024",
    },
    {
      title: "Student Attendance System",
      description: "QR-based web app for automated attendance logging and instant reporting.",
      languages: ["Python", "JavaScript"],
      techUsed: ["Flask", "React", "SQLite"],
      duration: "May 2023 – Jul 2023",
    }
  ];
  

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  function handleExpand(idx, expand) {
    setExpandedIndex(expand ? idx : null);
  }

  return (
    <div className="w-full max-w-7xl h-fit mx-auto bg-gray-300 dark:bg-[#0d1117] rounded-[22px] p-8 md:p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
        {projects.map((proj, idx) => (
          <ProjectCard
            key={idx}
            project={proj}
            isExpanded={expandedIndex === idx}
            onExpand={(expand) => handleExpand(idx, expand)}
          />
        ))}
      </div>
    </div>
  );
}
