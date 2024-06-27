import { sandboxPokemonsService } from "../services/SandboxPokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class SandboxPokemonsController {
  constructor() {
    console.log('Sandbox controller here');
  }


  async catchPokemon() {
    try {
      await sandboxPokemonsService.catchPokemon()
    } catch (error) {
      Pop.error(error)
      console.log("Check yoru catch pokemon functions");
    }
  }

  drawSandboxPokemon
}