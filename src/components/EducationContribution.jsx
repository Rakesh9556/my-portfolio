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
    <div className=" text-white pt-6 rounded-md font-sans w-full max-w-xl">
      <h2 className="text-lg text-left font-semibold mb-6">Education</h2>
      <div className="relative pl-6">
        <div className="absolute -top-4 left-3 w-[2px] h-full bg-neutral-600"></div>
        
        {educationData.map((item, idx) => (
          <div key={idx} className="flex items-start mb-6 relative">
            <div className="relative z-10 w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full -ml-7 mr-4">
              <img
                src={edIcon}
                alt="repo"
                className="w-5 h-5 invert"
              />
            </div>

            <div className="flex-1 pt-[4px]">
              <div className="flex justify-between items-center text-gray-50">
                <p className="text-base">
                  {item.degree}
                </p>
                <span className="text-xs text-gray-100 whitespace-nowrap ml-4">
                  {item.duration}
                </span>
              </div>
              <div className="flex justify-between items-center ml-4">
                <p className="text-blue-200 text-sm font-medium block mt-1">
                  {item.institution}
                </p>
                <span className="text-sm font-light italic text-gray-100 whitespace-nowrap ml-4">
                    {item.score}
                  </span>
              </div>

              {/* <div className="flex items-start ml-4 text-xs font-light italic text-gray-100 mt-1">
                {item.score}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationContribution;
