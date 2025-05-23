import React from "react";
import java from "../assets/java.svg";
import cpp from "../assets/cpp.svg";
import javascript from "../assets/javascript.svg";
import react from "../assets/react.svg";
import angular from "../assets/angular.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import springboot from "../assets/spring-boot.svg";
import hibernate from "../assets/hibernate.svg";
import mysql from "../assets/mysql.svg";
import git from "../assets/git.svg";
import vscode from "../assets/vscode.svg";
import intelijIdea from "../assets/intelijIdea.svg";
import ubuntu from "../assets/ubuntu.svg";


const skillsData = {
  languages: [
    { name: "Java", icon: java },
    { name: "C++", icon: cpp },
    { name: "JavaScript", icon: javascript },
  ],
  databases: [
    { name: "MySQL", icon: mysql },
  ],
  frameworks: [
    { name: "TailwindCSS", icon: tailwindcss },
    { name: "React.js", icon: react },
    { name: "Angular.js", icon: angular },
    { name: "Spring Boot", icon: springboot },
    { name: "Hibernate", icon: hibernate },
  ],
  tools: [
    { name: "Git", icon: git },
    { name: "Ubuntu", icon: ubuntu }, 
    { name: "VS Code", icon: vscode },
    { name: "IntelliJ IDEA", icon: intelijIdea },
  ],
};

function SkillsSection() {
  return (
    <section className="md:w-1/2 w-full h-fit ml-0 mt-4 bg-gray-300 dark:bg-[#0d1117] rounded-[22px] p-8 md:p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 capitalize mb-3.5">
              {category.replace(/([A-Z])/g, " $1")}
            </h3>
            <div className="flex flex-wrap gap-4 items-center justify-center">
              {skills.map((skill, i) => (
                <img
                  key={i}
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain"
                  title={skill.name}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
