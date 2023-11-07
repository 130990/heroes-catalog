import { heroes } from "../data/heroes";

export const GetHeroById = (id) => {
  return heroes.find(x => x.id === id )
}
