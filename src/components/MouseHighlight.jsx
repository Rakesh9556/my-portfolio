// src/components/MouseHighlight.jsx
import { useEffect, useState } from "react";

export default function MouseHighlight() {
  const [pulses, setPulses] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPulse = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setPulses((prev) => [...prev, newPulse]);

      // Remove pulse after animation ends
      setTimeout(() => {
        setPulses((prev) => prev.filter((p) => p.id !== newPulse.id));
      }, 600);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {pulses.map((pulse) => (
        <span
          key={pulse.id}
          className="absolute w-6 h-6 bg-white/20 rounded-full animate-ping"
          style={{
            top: pulse.y - 12,
            left: pulse.x - 12,
          }}
        />
      ))}
    </div>
  );
}
