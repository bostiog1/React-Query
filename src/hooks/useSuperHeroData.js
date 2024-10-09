import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroe = (heroId) => {
  return axios.get(`http://localhost:4000/superheroes/${heroId}`);
};

export const useSuperHeroData = (heroId) => {
  return useQuery(["super-heroe", heroId], () => fetchSuperHeroe(heroId), {});
};
