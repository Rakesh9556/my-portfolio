// techIcons.js
import springboot from "../assets/spring-boot.svg";
import mysql from "../assets/mysql.svg";
import maven from "../assets/phone.svg";
import jwt from "../assets/phone.svg";
import jsp from "../assets/phone.svg";
import jdbc from "../assets/phone.svg";
import twilio from "../assets/phone.svg";
import tailwindcss from "../assets/tailwindcss.svg";
import react from "../assets/react.svg";
import flask from "../assets/phone.svg";
import sqlite from "../assets/phone.svg";

export const techIconMap = {
  "Spring Boot": <img src={springboot} alt="Spring Boot" className=" w-4 h-4" />,
  "MySQL": <img src={mysql} alt="MySQL" className="w-3 h-3 invert" />,
  "Maven": <img src={maven} alt="Maven" className="w-5 h-5" />,
  "JWT": <img src={jwt} alt="JWT" className="w-5 h-5" />,
  "JSP": <img src={jsp} alt="JSP" className="w-5 h-5" />,
  "Servlets/JSP": <img src={jsp} alt="Servlets/JSP" className="w-5 h-5" />,
  "JDBC": <img src={jdbc} alt="JDBC" className="w-5 h-5" />,
  "Twilio API": <img src={twilio} alt="Twilio" className="w-5 h-5" />,
  "Tailwind CSS": <img src={tailwindcss} alt="Tailwind CSS" className="w-5 h-5" />,
  "React": <img src={react} alt="React" className="w-5 h-5" />,
  "React.js": <img src={react} alt="React.js" className="w-5 h-5" />,
  "Flask": <img src={flask} alt="Flask" className="w-5 h-5" />,
  "SQLite": <img src={sqlite} alt="SQLite" className="w-5 h-5" />,
};

export const techStylesMap = {
  "Spring Boot": {
    bg: "bg-green-100 dark:bg-green-800",
    text: "text-green-700 dark:text-green-200",
    border: "border-green-800 dark:border-green-300",
  },
  MySQL: {
    bg: "bg-blue-100 dark:bg-blue-800",
    text: "text-blue-700 dark:text-blue-200",
    border: "border-blue-800 dark:border-blue-300",
  },
  Maven: {
    bg: "bg-yellow-100 dark:bg-yellow-800",
    text: "text-yellow-700 dark:text-yellow-200",
    border: "border-yellow-800 dark:border-yellow-300",
  },
  JWT: {
    bg: "bg-purple-100 dark:bg-purple-800",
    text: "text-purple-700 dark:text-purple-200",
    border: "border-purple-800 dark:border-purple-300",
  },
  JSP: {
    bg: "bg-red-100 dark:bg-red-800",
    text: "text-red-700 dark:text-red-200",
    border: "border-red-800 dark:border-red-300",
  },
  "Servlets/JSP": {
    bg: "bg-red-100 dark:bg-red-800",
    text: "text-red-700 dark:text-red-200",
    border: "border-red-800 dark:border-red-300",
  },
  JDBC: {
    bg: "bg-pink-100 dark:bg-pink-800",
    text: "text-pink-700 dark:text-pink-200",
    border: "border-pink-800 dark:border-pink-300",
  },
  "Twilio API": {
    bg: "bg-cyan-100 dark:bg-cyan-800",
    text: "text-cyan-700 dark:text-cyan-200",
    border: "border-cyan-800 dark:border-cyan-300",
  },
  "Tailwind CSS": {
    bg: "bg-teal-100 dark:bg-teal-800",
    text: "text-teal-700 dark:text-teal-200",
    border: "border-teal-800 dark:border-teal-300",
  },
  React: {
    bg: "bg-sky-100 dark:bg-sky-800",
    text: "text-sky-700 dark:text-sky-200",
    border: "border-sky-800 dark:border-sky-300",
  },
  "React.js": {
    bg: "bg-sky-100 dark:bg-sky-800",
    text: "text-sky-700 dark:text-sky-200",
    border: "border-sky-800 dark:border-sky-300",
  },
  Flask: {
    bg: "bg-gray-200 dark:bg-gray-700",
    text: "text-gray-700 dark:text-gray-200",
    border: "border-gray-800 dark:border-gray-300",
  },
  SQLite: {
    bg: "bg-indigo-100 dark:bg-indigo-900",
    text: "text-indigo-700 dark:text-indigo-200",
    border: "border-indigo-800 dark:border-indigo-300",
  },
};

