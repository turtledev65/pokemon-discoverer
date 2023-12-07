import { Pokemon } from "../api/poke";

const Card = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="pokemon-card">
      <div
        className="pokemon-card__image"
        style={{ backgroundImage: `url(${pokemon.image})` }}
      ></div>
      <h1 className="pokemon-card__header">{pokemon.name}</h1>
      <p className="pokemon-card__description">{pokemon.description}</p>
    </div>
  );
};

export default Card;
