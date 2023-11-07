import { heroes } from "../data/heroes";

export const GetHeroesByName =(name ='')=>{
    name = name.toLocaleLowerCase().trim();
    
    if(name.length === 0) return [];

    return heroes.filter(x=> x.superhero.toLocaleLowerCase().includes(name));
}