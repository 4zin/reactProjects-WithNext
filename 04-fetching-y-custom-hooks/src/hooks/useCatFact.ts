import { useState, useEffect } from "react";
import { getRandomFact } from "../services";

export function useCatFact() {
  const [fact, setFact] = useState<string>();

  const refreshFact = async () => {
    const newFact = await getRandomFact();
    return setFact(newFact);
  }

  useEffect(()=>{refreshFact()},[])

  return {fact, refreshFact}
}