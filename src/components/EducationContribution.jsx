import React from "react";
import edIcon from "../assets/education.svg";

const educationData = [
  {
    degree: "B.Tech in Computer Science",
    institution: "Centurion University of Technology and Management",
    score: "Cgpa: 8.36",
    duration: "2022 - 2026",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Young Phoenix Public School",
    score: "Percentage: 63.2",
    duration: "2020 - 2022",
  },
  {
    degree: "Secondary Education",
    institution: "DAV Public School",
    score: "Percentage: 86.4",
    duration: "2019 - 2020",
  },
];

const EducationContribution = () => {
  return (
    <section className="w-full max-w-xl text-white mt-6 font-sans rounded-md">
      <h2 className="text-base font-semibold mb-6 text-left">Education</h2>
      <div className="relative pl-6">
        <div className="absolute -top-4 left-3 w-[2px] h-full bg-neutral-600"></div>
        {educationData.map((item, idx) => (
          <div key={idx} className="flex items-start mb-6 relative">
            <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-neutral-800 dark:bg-gray-700 rounded-full -ml-7 mr-4">
              <img src={edIcon} alt="Education Icon" className="w-5 h-5 invert" />
            </div>
            <div className="flex-1 mt-[6px] md:mt-[4px]">
              <div className="flex justify-between left-0 items-center text-gray-900 dark:text-gray-100">
                <p className="text-left text-xs md:text-base">{item.degree}</p>
                <span className="text-xs whitespace-nowrap ml-4">{item.duration}</span>
              </div>
              <div className="flex justify-between items-center mt-1">
                <p className="text-blue-700 dark:text-blue-200 text-left text-xs md:text-sm font-medium">{item.institution}</p>
                <span className="text-xs md:text-sm italic font-light text-gray-900 dark:text-gray-50 whitespace-nowrap ml-4">
                  {item.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationContribution;
