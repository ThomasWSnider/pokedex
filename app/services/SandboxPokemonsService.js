import { AppState } from "../AppState.js";
import { Pokemon } from "../models/Pokemon.js";
import { api } from "./AxiosService.js";

class SandboxPokemonsService {
  constructor() {
    console.log('Sandbox Pokemon service');
  }

  async catchPokemon() {
    const caughtPokemon = AppState.activePoke

    const response = await api.post('api/pokemon', caughtPokemon)

    console.log('Caught Pokemon', response.data);

    const newPokemon = new Pokemon(response.data)

    AppState.sandboxPokemon.push(newPokemon)
  }
}

export const sandboxPokemonsService = new SandboxPokemonsService