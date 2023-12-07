export type Pokemon = {
  name: string;
  description: string;
  id: number;
  image: string;
};

export async function getPokemon(id: number): Promise<Pokemon> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const content = await res.json();

  return {
    name: content.name,
    description: content.flavor_text_entries[0].flavor_text,
    id: content.id,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${content.id}.png`,
  };
}
