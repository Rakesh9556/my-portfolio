import React, { useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

export default function ProjectCard({ project, isExpanded, onExpand }) {
  const collapsedHeight = 140;
  const expandedHeight = 340;
  const threshold = 50;

  // Spring with industry-smooth config
  const [{ height, scale }, api] = useSpring(() => ({
    height: collapsedHeight,
    scale: 1,
    config: {
      tension: 120,    // softer spring for smoothness
      friction: 20,    // moderate friction for gentle slow down
      mass: 1,
      clamp: false,    // natural bounce
    },
  }));

  useEffect(() => {
    // Animate height smoothly on expand/collapse
    api.start({ height: isExpanded ? expandedHeight : collapsedHeight, immediate: false });
  }, [isExpanded, api]);

  const bind = useDrag(
    ({ last, movement: [, my], velocity: [, vy], direction: [, dy], dragging }) => {
      if (!last) {
        // Live drag - immediate height change & subtle scale up
        const newHeight = Math.min(
          Math.max(collapsedHeight, collapsedHeight + my),
          expandedHeight
        );
        api.start({ height: newHeight, scale: 1.03, immediate: true });
      } else {
        // On drag release: decide expand/collapse with velocity & direction
        const shouldExpand = my > threshold || (vy > 0.3 && dy > 0);
        const shouldCollapse = my < -threshold || (vy > 0.3 && dy < 0);

        if (shouldExpand) {
          onExpand(true);
          api.start({ height: expandedHeight, scale: 1, immediate: false });
        } else if (shouldCollapse) {
          onExpand(false);
          api.start({ height: collapsedHeight, scale: 1, immediate: false });
        } else {
          api.start({
            height: isExpanded ? expandedHeight : collapsedHeight,
            scale: 1,
            immediate: false,
          });
        }
      }
    },
    { axis: "y" }
  );

  const handleClick = () => {
    onExpand(!isExpanded);
  };

  return (
    <animated.div
      {...bind()}
      className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-md w-full overflow-hidden touch-none select-none flex flex-col"
      style={{
        height,
        cursor: "grab",
        scale,
        userSelect: "none",
        touchAction: "none",
      }}
      onClick={handleClick}
    >
      <div className="p-4 pt-3 text-left flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-blue-300">
            {project.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-300">{project.duration}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-sm">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.techUsed.map((tech, i) => (
              <span
                key={i}
                className="bg-green-100 dark:bg-green-700 text-xs px-2 py-1 rounded text-green-800 dark:text-green-100"
              >
                {tech}
              </span>
            ))}
          </div>

        {isExpanded && (
          <div className="mt-4 flex-grow">
            <div className="text-sm text-gray-600 dark:text-gray-300">{project.fullDescription}</div>

            <div className="mt-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-400">Languages:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.languages.map((lang, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-800 text-xs px-2 py-1 rounded text-blue-800 dark:text-blue-100"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom dots */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {[...Array(3)].map((_, idx) => (
                <span
                key={idx}
                className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"
                ></span>
            ))}
      </div>

    </animated.div>
  );
}
