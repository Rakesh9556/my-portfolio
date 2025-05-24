import { cn } from '../lib/utils';
import React from "react";

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-[-10] flex h-screen w-screen items-center justify-center bg-neutral-400 dark:bg-black">
      <div
        className={cn(
          "absolute inset-0 animate-gridMove",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <div
        className="pointer-events-none w-screen h-screen absolute inset-0 bg-gray-400 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"
      />

      <p
        className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"
      >
        Backgrounds
      </p>
    </div>
  );
}
