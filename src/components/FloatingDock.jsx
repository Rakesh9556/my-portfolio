import React from "react";
import doc from "../assets/document.svg";
import github from "../assets/github.svg";
import leetcode from "../assets/leetcode.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";

export default function FloatingDock() {
  const contacts = [
    { icon: <img src={doc} alt="Resume" />, title: "Resume", href: "https://github.com/Rakesh9556" },
    { icon: <img src={github} alt="GitHub" />, title: "GitHub", href: "https://github.com/Rakesh9556" },
    { icon: <img src={leetcode} alt="LeetCode" />, title: "LeetCode", href: "https://leetcode.com/Rakesh2004" },
    { icon: <img src={linkedin} alt="LinkedIn" />, title: "LinkedIn", href: "https://linkedin.com/in/Rakesh-guru" },
    { icon: <img src={twitter} alt="X" />, title: "Twitter", href: "https://x.com/" },
  ];

  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-end gap-4 rounded-2xl bg-gray-50 dark:bg-neutral-900 px-[2px] py-[2px] h-20 shadow-xl"
    >
      <div className="flex items-end gap-4 rounded-[calc(1rem-2px)] bg-gray-50 dark:bg-[#0d1117] px-6 py-3 h-full w-full">
        {contacts.map((item) => (
          <IconContainer key={item.title} mouseX={mouseX} {...item} />
        ))}
      </div>
</motion.div>

  );
}

function IconContainer({ mouseX, title, icon, href }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-150, 0, 150], [50, 90, 50]), {
    mass: 0.1, stiffness: 150, damping: 12,
  });

  const height = useSpring(useTransform(distance, [-150, 0, 150], [50, 90, 50]), {
    mass: 0.1, stiffness: 150, damping: 12,
  });

  const iconWidth = useSpring(useTransform(distance, [-150, 0, 150], [40, 60, 40]), {
    mass: 0.1, stiffness: 150, damping: 12,
  });

  const iconHeight = useSpring(useTransform(distance, [-150, 0, 150], [40, 60, 40]), {
    mass: 0.1, stiffness: 150, damping: 12,
  });

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 dark:bg-neutral-400"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 5, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border bg-white px-2 py-1 text-xs shadow text-neutral-700  dark:bg-neutral-700 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div style={{ width: iconWidth, height: iconHeight }} className="flex items-center justify-center">
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
