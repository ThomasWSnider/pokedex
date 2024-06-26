import { AppState } from "../AppState.js";
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


}

export const pokemonsService = new PokemonsService