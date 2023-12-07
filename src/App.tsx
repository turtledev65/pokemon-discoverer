import { useEffect, useState } from "react";
import "./App.css";
import { Pokemon, getPokemon } from "./api/poke";
import Card from "./components/card";

function App() {
  const [currentId, setCurrentId] = useState(1);
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getPokemon(currentId).then((res) => setPokemon(res));
  }, [currentId]);

  useEffect(() => {
    console.log(pokemon);
  }, [pokemon]);

  return (
    <div className="app">
      <div className="container">
        {pokemon && <Card pokemon={pokemon} />}
        <div className="button-container">
          <button
            disabled={currentId === 1}
            onClick={() => setCurrentId((prevId) => prevId - 1)}
          >
            Previous
          </button>
          <button
            disabled={currentId === 148}
            onClick={() => setCurrentId((prevId) => prevId + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
