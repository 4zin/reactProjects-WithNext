"use client";

import { useState, useEffect } from "react";
export const MouseFollower = () => {
  const [enabled, setEnabled] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      console.log("handleMove", { clientX, clientY });
      setCoords({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <main className="w-56">
      <div
        style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}
        className={`absolute pointer-events-none left-[-20px] top-[-20px] w-[40px] h-[40px] border-[1px] bg-[rgba(0,0,0,0.5)] rounded-full`}
      />
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguir puntero
      </button>
    </main>
  );
};
