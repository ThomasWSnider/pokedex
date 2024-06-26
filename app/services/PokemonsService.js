import { AppState } from "../AppState.js";
import { pokeApi } from "./AxiosService.js";

class PokemonsService {
  constructor() {
    console.log('Service is up and running');
  }
  async getPocketMonsters() {
    const response = await pokeApi.get('pokemon?limit=1302')
    console.log(response.data);
    AppState.allPokemon = response.data.results
  }


}

export const pokemonsService = new PokemonsService