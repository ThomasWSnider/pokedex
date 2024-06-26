import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";

export class PokemonsController {

  constructor() {
    console.log(`We're gonna catch'em all! -PokemonsController`);
  }

  async drawPocketMonsters() {
    try {
      await pokemonsService.drawPocketMonsters()
    } catch (error) {
      Pop.error(error)
      console.log('Check your get request in the service my man');
    }
  }
}