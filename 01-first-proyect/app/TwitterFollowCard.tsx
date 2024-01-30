"use client";
import Image from "next/image";
import { montserrat } from "./ui/fonts";
import { useState } from "react";

export default function TwitterFollowCard({
  userName,
  children,
  initialIsFollowing,
}: {
  userName: string;
  children: string;
  initialIsFollowing: boolean;
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovered, setIsHovered] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleHover = () => {
    if (isFollowing) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <main className="flex items-center text-white justify-between">
      <header className="flex items-center gap-2">
        <Image
          src={`https://unavatar.io/twitter/${userName}`}
          alt="avatar"
          width={300}
          height={300}
          className="rounded-full w-20 h-20"
        />
        <div className={`${montserrat.className} flex flex-col`}>
          <strong>{children}</strong>
          <span className="opacity-50">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
          className={`bg-slate-100 text-black p-1 items-center rounded-full ml-12 w-[160px]  font-medium text-lg
          ${
            isFollowing
              ? "border-black border text-white bg-transparent"
              : "hover:bg-slate-300"
          } 
          ${
            isHovered
              ? "hover:bg-red-600 hover:bg-opacity-10 border-red-500"
              : ""
          } 
          `}
        >
          <span className={`${isHovered ? "hidden" : ""}`}>{text}</span>
          <span className={`${isHovered ? "text-red-500" : "hidden"}`}>
            Dejar de seguir
          </span>
        </button>
      </aside>
    </main>
  );
}
