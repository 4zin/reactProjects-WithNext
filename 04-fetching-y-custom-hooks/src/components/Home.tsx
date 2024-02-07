"use client";

import Image from "next/image";
import { useCatImage } from "../hooks/useCatImage";
import { useCatFact } from "../hooks/useCatFact";


const Home = () => {
  const {fact, refreshFact} = useCatFact()
  const {image} = useCatImage({fact} as {fact: string})
  
  const handleClick = async () => {
    refreshFact()
  }

  return (
    <div className="flex flex-col items-center place-content-center">
      <h1 className="text-2xl mt-4 mb-8">App de gatitos</h1>
      <button 
        onClick={handleClick}
        className="bg-slate-300 border border-black px-1 rounded-md mb-4 hover:bg-slate-400 active:translate-y-1 shadow-lg duration-75">
          Get new fact
        </button>
      {fact && <span>{fact}</span>}
      {image && <Image src={image} alt="gatito" width={300} height={300} priority={true} />}
    </div>
  );
};

export default Home;
