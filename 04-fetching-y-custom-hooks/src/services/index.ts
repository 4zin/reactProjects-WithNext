const FACT_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () : Promise<string> => {
  return await fetch(FACT_URL)
  .then(res => res.json() as Promise<{fact: string}>)
  .then(data =>{
    const {fact} = data
    return fact
  })
}
