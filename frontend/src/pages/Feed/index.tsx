import React from "react";
import api from "../../services/api";

interface PokemonsProps {
  name: string;
  element: string;
  id: number;
}

const Feed = () => {
  const [pokemons, setPokemons] = React.useState<PokemonsProps[]>([]);

  const loadPokemons = React.useCallback(async () => {
    const pokemonsResponse = await api.get("");
    const pokemonsData = pokemonsResponse.data;
    setPokemons([...pokemonsData]);
  }, []);

  React.useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);
  return (
    <>
      <h1>Pokemóns</h1>
      {pokemons.map((pokemon) => (
        <div>
          <h3>{pokemon.name}</h3>
          <span>Tipo: {pokemon.element}</span>
        </div>
      ))}
    </>
  );
};

export default Feed;
