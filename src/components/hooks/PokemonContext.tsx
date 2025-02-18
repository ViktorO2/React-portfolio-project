import React, { createContext, useContext, useMemo, useState } from "react";

interface PokemonContextType {
  pokemonName: string;
  setPokemonName: React.Dispatch<React.SetStateAction<string>>;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pokemonName, setPokemonName] = useState<string>("");

  const value = useMemo(() => ({ pokemonName, setPokemonName }), [pokemonName]);

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }
  return context;
};
