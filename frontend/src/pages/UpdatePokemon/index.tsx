import React, { FormEvent } from "react";
import api from "../../services/api";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Container } from "./styles";

interface Pokemon {
  name: string;
  element: string;
}

interface RouteProps {
  id: string;
}

const UpdatePokemon = () => {
  const [name, setName] = React.useState("");
  const [element, setElement] = React.useState("");
  const { params } = useRouteMatch<RouteProps>();
  const history = useHistory();

  const loadPokemon = React.useCallback(async () => {
    const pokemonResponse = await api.get<Pokemon>(`/${params.id}`);
    const pokemonData = pokemonResponse.data;
    setName(pokemonData.name);
    setElement(pokemonData.element);
  }, [params.id]);

  React.useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  const updatePoke = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      try {
        const response = { name, element };
        await api.put(`${params.id}`, response);
        history.goBack();
      } catch (err) {
        alert("Ocorreu um erro");
      }
    },
    [element, history, name, params.id]
  );

  return (
    <Container>
      <h1>{name}</h1>
      <form onSubmit={updatePoke}>
        <label>Nome do pokémon:</label>
        <input
          required
          value={name}
          type="text"
          onChange={(e: any) => setName(e.target.value)}
        />
        <label>Elemento do pokémon:</label>
        <input
          required
          value={element}
          type="text"
          onChange={(e: any) => setElement(e.target.value)}
        />
        <button>Enviar alterações</button>
      </form>
    </Container>
  );
};

export default UpdatePokemon;
