import { PokemonType } from "./pokemon-types";

export class Pokemon {
  private _name: string;
  private _type: PokemonType;
  private _level: number;

  constructor(name: string, type: PokemonType, level: number) {
    this._name = name;
    this._type = type;
    this._level = level;
  }

  get name(): string {
    return this._name;
  }

  get type(): PokemonType {
    return this._type;
  }

  get level(): number {
    return this._level;
  }
}
