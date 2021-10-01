import React, { FormEvent } from "react";
import api from "../../services/api";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const NewPoke = () => {
  const [name, setName] = React.useState("");
  const [element, setElement] = React.useState("");
  const history = useHistory();

  const addPokemon = React.useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      const response = { name, element };
      await api.post("", response);
      history.goBack();
    },
    [name, element, history]
  );
  return (
    <Container>
      <form onSubmit={addPokemon}>
        <label>Nome do pokémon:</label>
        <input
          type="text"
          value={name}
          required
          onChange={(e: any) => setName(e.target.value)}
        />
        <label>Elemento do pokémon:</label>
        <input
          type="text"
          value={element}
          required
          onChange={(e: any) => setElement(e.target.value)}
        />
        <button>Enviar pokémon</button>
      </form>
    </Container>
  );
};

export default NewPoke;
