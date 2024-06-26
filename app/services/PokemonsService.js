import { pokeApi } from "./AxiosService.js";

class PokemonsService {
  constructor() {
    console.log('Service is up and running');
  }
  async drawPocketMonsters() {
    const response = await pokeApi.get
  }


}

export const pokemonsService = new PokemonsService