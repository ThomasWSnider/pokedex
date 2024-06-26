import { AppState } from "../AppState.js";
import { pokemonsService } from "../services/PokemonsService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

export class PokemonsController {
  constructor() {
    console.log(`We're gonna catch'em all! -PokemonsController`);
    AppState.on('allPokemon', this.drawPocketMonsters)
    this.getPocketMonsters()
  }


  async getPocketMonsters() {
    try {
      await pokemonsService.getPocketMonsters()
    } catch (error) {
      Pop.error(error)
      console.log('Check your get request in the service my man');
    }
  }

  drawPocketMonsters() {
    const pocketMonsters = AppState.allPokemon
    let pokeHTML = ''
    pocketMonsters.forEach((pokemon) => pokeHTML += `
              <div class="col-12">
                <button onclick="app.PokemonsController.getActivePoke()" class="w-100 btn btn-outline-danger"><p class="fs-5 m-0 py-2 fw-bold"><i class="mdi mdi-pokeball"></i> ${pokemon.name}</p></button>
              </div>
          `)
    setHTML('pokeList', pokeHTML)
  }

  getActivePoke() {

  }
}