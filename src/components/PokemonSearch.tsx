import React, { useCallback, useMemo } from "react";
import "./styles/PokemonSearch.css";
import { ClipLoader } from "react-spinners";
import { usePokemon } from "./hooks/PokemonContext";
import { useDebounce } from "./hooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemon } from "../services/apiClient";

interface PokemonData {
  name: string;
  sprites: {
    front_default: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
}

const PokemonSearch: React.FC = () => {
  const { pokemonName, setPokemonName } = usePokemon();
  const debouncedName = useDebounce(pokemonName, 1000);

  const { data, error, isLoading } = useQuery<PokemonData>({
    queryKey: ["pokemon", debouncedName],
    queryFn: () => fetchPokemon(debouncedName),
    enabled: !!debouncedName,
  });

  const pokemonData = useMemo(() => data || null, [data]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPokemonName(e.target.value);
    },
    [setPokemonName],
  );

  return (
    <div className="pokemon-search">
      <h1 className="title">Pokemon Search</h1>

      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Enter a Pokémon name"
          value={pokemonName}
          onChange={handleInputChange}
        />
      </form>

      {error && (
        <div className="error-message">
          <p>
            Error fetching Pokémon data. Please check the name or your network.
          </p>
        </div>
      )}

      {isLoading && <ClipLoader className="loader" />}

      {pokemonData && (
        <div className="pokemon-info">
          <h2 className="pokemon-name">{pokemonData.name}</h2>
          <img
            className="pokemon-image"
            src={pokemonData.sprites.front_default}
            alt={pokemonData.name}
          />
          <h3 className="abilities-title">Abilities:</h3>
          <ul className="abilities-list">
            {pokemonData.abilities.map((ability, index) => (
              <li key={index} className="ability-item">
                {ability.ability.name}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!pokemonData && !isLoading && !error && (
        <p className="no-data-message">
          No Pokémon yet, please submit a Pokémon!
        </p>
      )}
    </div>
  );
};

export default PokemonSearch;
