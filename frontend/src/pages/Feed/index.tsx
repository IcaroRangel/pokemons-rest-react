import React from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { Link } from "react-router-dom";

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

  const deletePokemon = React.useCallback(
    async (id: number) => {
      await api.delete(`/${id}`);
      const deletedPoke = pokemons.filter((poke) => poke.id !== id);
      setPokemons([...deletedPoke]);
    },
    [pokemons, setPokemons]
  );

  return (
    <Container>
      <h1>Pokémons</h1>
      <Link to="/newPoke">
        <button>Adicionar pokémon</button>
      </Link>
      {pokemons.map((pokemon) => (
        <div>
          <h3>{pokemon.name}</h3>
          <span>Tipo: {pokemon.element}</span>
          <button onClick={() => deletePokemon(pokemon.id)}>
            Deletar pokémon
          </button>
          <Link to={`/updatePoke/${pokemon.id}`}>
            <button>Editar pokémon</button>
          </Link>
        </div>
      ))}
    </Container>
  );
};

export default Feed;
