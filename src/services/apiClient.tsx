import axios from "axios";

const API_BASE_URL = "https://pokeapi.co/api/v2/";

export const fetchPokemon = async (name: string) => {
  const response = await axios.get(
    `${API_BASE_URL}pokemon/${name.toLowerCase()}`,
  );
  return response.data;
};
