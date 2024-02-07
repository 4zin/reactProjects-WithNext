import { useState, useEffect } from "react";

const PREFIX_URL = 'https://cataas.com'

export function useCatImage({ fact }: { fact: string }) {
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(" ", 1)
    console.log(firstWord);

    setImage(`${PREFIX_URL}/cat/says/${firstWord}?fontSize=50&fontColor=white`)
  }, [fact])

  return { image }
}