import React, { useState } from "react";
import hackerrank from "../assets/hackerrank.svg";
import cutm from "../assets/cutm.png";
import aws from "../assets/aws.svg";
import wadhani from "../assets/wadhani.jpeg";

// Certificate images
import certJava from "../assets/rakesh-guru.png";
import certReact from "../assets/rakesh-guru.png";
import certSpring from "../assets/rakesh-guru.png";
import certMySQL from "../assets/rakesh-guru.png";

const certificateData = [
  {
    title: "Problem Solving (Intermediate)",
    date: "Mar 2025",
    icon: hackerrank,
    image: certJava,
    issuer: "HackerRank",
  },
  {
    title: "Code-Golf Competition",
    date: "Aug 2024",
    icon: cutm,
    image: certMySQL,
    issuer: "CUTM",
  },
  {
    title: "AWS Academy Cloud Foundations",
    date: "Apr 2024",
    icon: aws,
    image: certSpring,
    issuer: "AWS Academy",
  },
  {
    title: "Core Employability Skills",
    date: "Apr 2024",
    icon: wadhani,
    image: certReact,
    issuer: "Wadhwani Foundation",
  },
];

function CertificateSection() {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section className="md:w-1/2 w-full h-fit ml-0 mt-4 bg-gray-300 dark:bg-[#0d1117] rounded-[22px] p-4">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Certificates</h2>
      <div className="grid md:grid-cols-2 gap-2">
        {certificateData.map((cert, idx) => (
          <div
            key={idx}
            onClick={() => setActiveCert(cert)}
            className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm flex flex-col gap-[10px] hover:shadow-md transition"
          >
            <h3 className="text-base text-left font-semibold text-gray-900 dark:text-white">
              {cert.title}
            </h3>

            <div className="flex items-center justify-between">
              <div
                className={`w-8 h-8 rounded flex items-center justify-center ${
                  cert.issuer === "AWS Academy" ? "bg-gray-300 p-1" : ""
                }`}
                title={cert.issuer}
              >
                <img
                  src={cert.icon}
                  alt={cert.issuer}
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-gray-500 font-semibold dark:text-gray-200">
                {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-4 rounded-lg max-w-[90%] max-h-[90%] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeCert.image}
              alt={activeCert.title}
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default CertificateSection;
