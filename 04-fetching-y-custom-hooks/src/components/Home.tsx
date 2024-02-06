"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getRandomFact } from '../services/index'

const PREFIX_URL = 'https://cataas.com'

function useCatImage({fact}: {fact: string}) {
  const [image, setImage] = useState<string>();

  useEffect(()=>{
    if(!fact) return
    const firstWord = fact.split(" ")[0]
    console.log(firstWord);
    
    setImage(`${PREFIX_URL}/cat/says/${firstWord}?fontSize=50&fontColor=white`)
  },[fact])

  return {image}
}

const Home = () => {
  const [fact, setFact] = useState<string>();
  const {image} = useCatImage({fact} as {fact: string})

  

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  },[])

  

  const handleClick = async () =>{
    const newFact = await getRandomFact()
    setFact(newFact)
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
