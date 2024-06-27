import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService {
  constructor() {
    console.log('Service is up and running');
  }

  async getPocketMonsters() {
    const response = await pokeApi.get('generation/1')
    console.log(response.data);
    AppState.allPokemon = response.data.pokemon_species
  }

  async getActivePoke(pokeName) {
    const response = await pokeApi.get(`pokemon/${pokeName}`)
    console.log('here is your pokemon, my man', response.data);
    AppState.activePoke = new Pokemon(response.data)
    console.log('Here is the pokemon', AppState.activePoke);
  }


}

export const pokemonsService = new PokemonsService