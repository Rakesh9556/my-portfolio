import React from "react";
import {BackgroundGradient} from "./ui/background-gradient"
import profile from "../assets/rakesh-guru.png";
import location from "../assets/location.svg";
import EducationContribution from "./EducationContribution";



export default function ProfileCard() {
  return (
    <div className="w-full bg-gray-300 rounded-[22px] max-w-md p-4 sm:p-10 dark:bg-[#0d1117]">
      <div className="relative flex flex-col items-center ">
      <div className="w-[180px] h-[180px] overflow-hidden rounded-full">
        <img
            alt="Author"
            loading="eager"
            decoding="async"
            className="object-cover w-full h-full relative "
            src={profile}
            style={{ color: "transparent" }}
        />
        <div className="absolute top-0 -left-4 rounded-full border px-2.5 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mb-auto flex w-fit items-center justify-center gap-1 bg-green-500/20 text-green-500">
            <span className="font-semibold">Available To Work</span>
        </div>
        <div className="absolute -right-8 bottom-[25%] flex items-center gap-x-1 font-semibold dark:text-blue-300">
            <img src={location} alt="Location" className="w-4 h-4 dark:filter dark:invert" />
            <span className="hidden md:inline text-xs font-medium">Bhubaneswar, Odisha</span>
        </div>
      </div>

        <div className="ml-4 flex flex-col gap-y-1">
          <h1 className="text-2xl font-bold mt-2 text-primary dark:text-gray-200">Rakesh Guru</h1>
        </div>
      </div>

      <div className="mt-4 text-gray-800 dark:text-gray-200">
        <h2 className="text-lg font-semibold text-left mb-2">About Me</h2>
        <div className="text-left">
            I'm a
            <span className="font-bold text-green-700 text-lg"> Java Developer</span>
            . I create effective software products which solve the pain points of millions.
        </div>
       </div>            

      <div className="mt-4">
        <h2 className="text-lg font-semibold text-left text-gray-800 dark:text-gray-200 mb-4">Highlights</h2>
        <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600">
            150+ LeetCode Problems
            </span>
            <span className="rounded-full bg-green-100 dark:bg-green-800 text-sm px-3 py-1 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600">
            Object Oriented Design
            </span>
            <span className="rounded-full bg-purple-100 dark:bg-purple-800 text-sm px-3 py-1 text-purple-700 dark:text-purple-200 border border-purple-300 dark:border-purple-600">
            Clean Code Practitioner
            </span>
            <span className="rounded-full bg-blue-100 dark:bg-blue-800 text-sm px-3 py-1 text-blue-700 dark:text-blue-200 border border-blue-300 dark:border-blue-600">
            Microservices Oriented
            </span>
        </div>
    </div>
    <EducationContribution />
    </div>

  );
}
