import React from "react";
import {BackgroundGradient} from "./ui/background-gradient"
import profile from "../assets/rakesh-guru.png";
import location from "../assets/location.svg";
import EducationContribution from "./EducationContribution";



export default function ProfileCard() {
  return (
    <div className="w-full h-fit bg-gray-300 rounded-[22px] max-w-md p-4 md:p-8 dark:bg-[#0d1117]">
      <div className="relative flex flex-col items-center ">
      <div className="w-[120px] h-[120px]  md:w-[180px] md:h-[180px] overflow-hidden rounded-full">
        <img
            alt="Author"
            loading="eager"
            decoding="async"
            className="object-cover w-full h-full relative "
            src={profile}
            style={{ color: "transparent" }}
        />
        <div className="absolute top-0 -left-1 md:-left-4 rounded-full border px-1 py-0.5 md:px-2 md:py-1 text-[8px] md:text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 mb-auto flex w-fit items-center justify-center gap-1 bg-green-500/20 text-green-500">
            <span className="font-semibold">Available To Work</span>
        </div>
        <div className="absolute right-5 md:-right-5 bottom-[30%] md:bottom-[25%] flex items-center justify-center gap-x-0.5 font-semibold text-orange-700 dark:text-orange-300">
            <img src={location} alt="Location" className="w-2 h-2 md:w-3 md:h-3" />
            <span className="text-[8px] md:text-xs font-medium">Bhubaneswar, Odisha</span>
        </div>
      </div>

        <div className="ml-4 flex flex-col gap-y-1">
          <h1 className="text-xl md:text-2xl font-bold mt-2 bg-gradient-to-b from-neutral-700 to-neutral-900 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">Rakesh Guru</h1>
        </div>
      </div>

      <div className="mt-4 text-gray-800 dark:text-gray-200">
        <h2 className="text-sm md:text-base font-semibold text-left mb-2">About Me</h2>
        <div className="text-left text-xs md:text-[16px]">
            I'm a
            <span className="font-bold text-green-600 md:text-base"> Java Developer</span>
            . I create effective software products which solve the pain points of millions.
        </div>
       </div>            

      <div className="mt-5">
        <h2 className="text-sm md:text-base font-semibold text-left text-gray-800 dark:text-gray-200 my-4">Highlights</h2>
        <div className="flex flex-wrap gap-2 text-[12px] md:text-sm font-semibold md:font-bold">
            <span className="rounded-full bg-gray-100 dark:bg-gray-700 px-3 py-1 text-gray-800 dark:text-gray-200 border border-gray-400 dark:border-gray-600">
            150+ LeetCode Problems
            </span>
            <span className="rounded-full bg-green-100 dark:bg-green-800 px-3 py-1 text-green-700 dark:text-green-200 border border-green-300 dark:border-green-600">
            Object Oriented Design
            </span>
            <span className="rounded-full bg-purple-100 dark:bg-purple-800 px-3 py-1 text-purple-700 dark:text-purple-200 border border-purple-300 dark:border-purple-600">
            Clean Code Practitioner
            </span>
            <span className="rounded-full bg-blue-100 dark:bg-blue-800 px-3 py-1 text-blue-700 dark:text-blue-200 border border-blue-300 dark:border-blue-600">
            Microservices Oriented
            </span>
        </div>
    </div>
    <EducationContribution />
    </div>

  );
}
