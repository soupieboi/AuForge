import { Pokemon } from "./pokemon";
import { PokemonType } from "./pokemon-types";
import pokemonData from "../static/pokemon.json";

export class PokemonArray {
  private _pokemons: Pokemon[];
  private _allPokemon: Pokemon[];
  private pokeBuffer: Pokemon[] | null;

  constructor() {
    this._pokemons = [];
    this._allPokemon = [];
    this.pokeBuffer = null;

    this.populateList();
    this.addInitialPokemons();
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  get length(): number {
    return this._pokemons.length;
  }

  get isEmpty(): boolean {
    return this.length === 0;
  }

  get isBufferEmpty(): boolean {
    return this.pokeBuffer === null || this.pokeBuffer.length === 0;
  }

  get get100(): Pokemon[] {
    const shuffled = this._allPokemon.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 100);
  }

  resetFilter(): void {
    if (!this.isBufferEmpty) {
      this._pokemons = [...this.pokeBuffer];
      this.pokeBuffer = null;
      console.log("Filter reset, pokemons:", this._pokemons);
    } else {
      console.warn("Buffer is empty, cannot reset filter.");
    }
  }

  addPokemon(pokemon: Pokemon): void {
    this._pokemons.push(pokemon);
  }

  filterByType(type: PokemonType): Pokemon[] {
    if (this.pokeBuffer === null) {
      this.pokeBuffer = [...this._pokemons];
    }
    this._pokemons = this._pokemons.filter((p) => p.type === type);
    console.log("Filtered pokemons:", this._pokemons);
    return this._pokemons;
  }

  populateList(): void {
    pokemonData.forEach((pokemonData) => {
      const pokemon = new Pokemon(
        pokemonData.name,
        pokemonData.type.toString() as PokemonType,
        Math.floor(Math.random() * 50)
      );
      this._allPokemon.push(pokemon);
    });
  }

  addInitialPokemons(): void {
    this.get100.forEach((pokemon) => this.addPokemon(pokemon));
  }
}
